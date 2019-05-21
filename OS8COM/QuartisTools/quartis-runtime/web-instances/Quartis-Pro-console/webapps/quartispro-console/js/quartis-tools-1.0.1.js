var QuartisTools = function(url, token, dispatcherUrl) {
    var self = this;

    this.url = url;
    this.token = token;
    this.dispatcherUrl = dispatcherUrl;
    this.user = null;

    var memories = [];

    this.webSocket = undefined;
    this.webSocketId = null;
    this.lastConsoleOpen = null;

    function findMemoryById(id) {
        for (var i = 0; i < memories.length; i++) {
            if (id === memories[i].id) {
                return memories[i];
            }
        }
        return null;
    };

    function findMemoryByName(name) {
        for (var i = 0; i < memories.length; i++) {
            if (name === memories[i].name) {
                return memories[i];
            }
        }
        return null;
    };

    this.openSocket = function () {

        if (this.isConnected()) {

            //$Log.debug("Connection already opened.");

        } else {

            $Log.debug("Connection opening...");

            this.webSocket = new WebSocket(this.url);

            this.webSocket.onopen = function (event) {
                if (event.data === undefined)
                    return;

                $Log.debug("Connection opened.");
                $Log.debug(event.data);
            };

            this.webSocket.onmessage = function (event) {

                var obj = JSON.parse(event.data);

                var method = obj.method;
                if (method !== null && method !== undefined) {

                    switch (method) {
                        case "onConnected":
                            self.webSocketId = obj.sessionId;

                            self.onConnected();

                            self.connectToQuartisTools();
                            break;
                        case "onConnectingToQuartisTools":
                            self.onConnectingToQuartisTools();
                            break;
                        case "onConnectedToQuartisTools":
                            self.onConnectedToQuartisTools();
                            break;
                        case "onLogingToQuartisTools":
                            var u = JSON.parse(obj.user);
                            self.onLogingToQuartisTools(u);
                            break;
                        case "onLogonToQuartisTools":
                            var u = JSON.parse(obj.user);
                            if(self.user !== null && self.user.name === u.name) {

//                                $Log.warning("User " + u.name + " already logon !");

                            } else {
                                self.user = u;

                                if(self.onLogonToQuartisTools(self.user)) {

                                    self.webSocket.send("{ \"method\": \"openUserConsole\" }");

                                }

                            }

                            break;
                        case "onLogoutToQuartisTools":
                            var u = JSON.parse(obj.user);
                            var auto = obj.auto;

                            self.user = null;
                            self.onLogoutToQuartisTools(u, auto);

                            break;
                        case "onDisconnectedToQuartisTools":
                            var auto = obj.auto;

                            self.user = null;
                            self.onDisconnectedToQuartisTools(auto);

                            break;
                        case "onDisconnected":
                            self.closeSocket();
                            break;
                        case "onRefreshMemories":
                            var mems = JSON.parse(obj.memories);

                            for (var i = 0; i < mems.length; i++) {
                                var memory = mems[i];
                                var value = memory.values.replace(/\\xa7/g, String.fromCharCode(167));

                                var current = findMemoryByName(memory.nom);
                                if (current === null) {
                                    memories.push({id: memory.id, name: memory.nom, value: value});
                                } else {
                                    current.value = value;
                                }

                                self.onUpdateMemory(memory.nom, value);
                            }
                            
                            break;
                        case "onOpenConsole":
                            var console = JSON.parse(obj.console);

                            // Check if we haven't double clic or other
                            // Prevent to open twice the same window
                            if (console.name !== this.lastConsoleOpen) {
                              this.lastConsoleOpen = console.name;

                              $Log.info("onOpenConsole: " + console.name);

                              self.onOpenConsole(console);
                            }
                            break;
                        case "onCloseConsole":
                            var console = JSON.parse(obj.console);

                            // Empty lastConsoleOpen
                            if (console.name === this.lastConsoleOpen) {
                              this.lastConsoleOpen = null;
                            }

                            self.onCloseConsole(console);

                            break;
                        case "onInfo":
                            $Log.info($i18n.get("status." + obj.status));

                            break;
                        case "onWarning":
                            $Log.warning($i18n.get("status." + obj.status));

                            break;
                        case "onError":
                            $Log.error($i18n.get("status." + obj.status));

                            break;
                        case "onUserDiconnectedOther":
                            window.location.href = self.dispatcherUrl + '/quartispro-auth/index.jsp?lang=fr&autoConnect=false&userDisconnect=' + obj.tcl;
                            self.closeSocket();
                            break;
                    }
                }
            };

            this.webSocket.onclose = function (event) {
                self.webSocketId = null;
                self.onDisconnected();
            };

        }
    };

    this.closeSocket = function() {
        this.webSocket.close();
    };

    this.connect = function () {
        this.openSocket();
    };

    this.connectToQuartisTools = function () {
        var self = this;
        $.get(self.dispatcherUrl + "/quartispro-tools/ipresolver", function(data) {
            var ip = data.ip;
            if (self.isConnected()) {
                self.webSocket.send("{ \"method\": \"connectToQuartisTools\", \"token\": \"" + self.token + "\", \"ip\": \"" + ip + "\" }");
            }
        });
    };

    this.disconnect = function () {
        if (this.isConnected()) {
            this.webSocket.send("{ \"method\": \"disconnectToQuartisTools\" }");
        }
        this.closeSocket();
    };

    this.isConnected = function() {
        return this.webSocket !== undefined && this.webSocket.readyState !== WebSocket.CLOSED;
    };

    this.isLogon = function() {
        return this.user !== undefined && this.user !== null;
    };

    this.closeConsole = function (group, name) {
        if (this.isConnected()) {
            this.webSocket.send("{ \"method\": \"closeConsoleByName\", \"name\": \"" + name + "\" }");
        }
    };

    this.executeLpx = function (lpx, params) {
        if (this.isConnected()) {
            var array = "[";
            for (var i = 0; i < params.length; i++) {
                if (i != 0) {
                    array += ",";
                }
                array += "{ \"param\":\"" + params[i] + "\" }";
            }
            array += "]";

            this.webSocket.send("{ \"method\": \"executeLpx\", \"lpx\": \"" + lpx + "\", \"params\": " + array + " }");
        }
    };

    this.executeScript = function (script) {
        $.ajax({
            url: "execute?wsid=" + webSocketId + "&" + script.url,
            type: 'post',
            data: (typeof script.params !== 'undefined' ? script.params : ''),
            dataType: (typeof script.type !== 'undefined' ? script.type : 'xml'),
            async: (typeof script.async !== 'undefined' ? script.async : true),
            success: function (data, status) {
                if (typeof script.onSuccess !== 'undefined')
                    script.onSuccess(data, status);
            },
            error: function (data, status, error) {
                if (typeof script.onError !== 'undefined')
                    script.onError(data, status, error);
            }
        });
    };

    this.initMemories = function (names) {
        if (this.isConnected()) {
            var array = "[";
            for (var i = 0; i < names.length; i++) {
                if (i != 0) {
                    array += ","
                }
                array += "{ \"memory\":\"" + names[i] + "\" }";
            }
            array += "]";
            this.webSocket.send("{ \"method\": \"listenMemories\", \"memories\": " + array + " }");
        }
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            var memory = findMemoryByName(name);
            if (memory !== null) {
                this.onUpdateMemory(name, memory.value);
            }
        }
    };

    this.readMemory = function (name) {
        var current = findMemoryByName(name);
        return current !== null ? current.value : [];
    };

    this.writeMemory = function (name, value) {
        if (this.isConnected()) {
            // Gestion des guillemets dans la value
            if (value.toString() !== undefined && value.toString().indexOf('"') > -1) {
              value = value.replace(new RegExp('"', 'g'), '\\"');
            }
            this.webSocket.send("{ \"method\": \"writeMemory\", \"memory\": \"" + name + "\", \"value\": \"" + value + "\" }");
        }
    };

    this.onConnected = function () {
    };

    this.onDisconnected = function () {
    };

    this.onConnectingToQuartisTools = function () {
    };

    this.onConnectedToQuartisTools = function () {
    };

    this.onLogingToQuartisTools = function (user) {
    };

    this.onLogonToQuartisTools = function (user) {
        return true;
    };

    this.onLogoutToQuartisTools = function (user, auto) {
    };

    this.onDisconnectedToQuartisTools = function (auto) {
    };

    this.onOpenConsole = function (console) {
    };

    this.onCloseConsole = function (console) {
    };

    this.onUpdateMemory = function (memory, value) {

    };
}