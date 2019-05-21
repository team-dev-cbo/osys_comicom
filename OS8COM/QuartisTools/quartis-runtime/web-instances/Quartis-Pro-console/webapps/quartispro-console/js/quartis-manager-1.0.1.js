var $SwipeOptions = {
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    },
    pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom, fingerData) {
    },
    fingers:1,
    allowPageScroll:"none"
};
var $Nav = {
    consolePage1: null,
    consolePage2: null,
    consolePage3: null,
    consolePage4: null,
    consolePage5: null,
    consoleFooterPage: null,
    consoleMain: null,
    consoleFunctions: null,
    currentPage: "page1",
    lastClosedConsole: "",
    defaultConsoleContainer: "",
    currentContainers: [],
    showLastContainer: function (callback) {

        var lastContainer = this.currentContainers.peek();

//        $Log.debug("--- showLastContainer - " + lastContainer + " - " + callback);

        var swipeOptions = "destroy";
        if(this.consoleMain !== null) {
            swipeOptions = $.extend({}, $SwipeOptions, this.consoleMain.onSwipe());
        }

        if (lastContainer === "footer-page") {
            if (this.consoleFooterPage !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consoleFooterPage.onSwipe());
                launchAnimation(function() {
                    return showSouthN(callback);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "functions") {
            if (this.consoleFunctions !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consoleFunctions.onSwipe());
                launchAnimation(function() {
                    return showEastN(callback);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "page1") {
            if (this.consolePage1 !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consolePage1.onSwipe());
                showPageDirectly(1);
                launchAnimation(function() {
                    return showPageN(1, callback, true);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "page2") {
            if (this.consolePage2 !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consolePage2.onSwipe());
                showPageDirectly(2);
                launchAnimation(function() {
                    return showPageN(2, callback, true);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "page3") {
            if (this.consolePage3 !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consolePage3.onSwipe());
                showPageDirectly(3);
                launchAnimation(function() {
                    return showPageN(3, callback, true);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "page4") {
            if (this.consolePage4 !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consolePage4.onSwipe());
                showPageDirectly(4);
                launchAnimation(function() {
                    return showPageN(4, callback, true);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else if (lastContainer === "page5") {
            if (this.consolePage5 !== null) {
                swipeOptions = $.extend({}, $SwipeOptions, this.consolePage5.onSwipe());
                showPageDirectly(5);
                launchAnimation(function() {
                    return showPageN(5, callback, true);
                });
            } else {
                this.currentContainers = ["main"];
                launchAnimation(function() {
                    return showCenterN(callback);
                });
            }
        } else {
            this.currentContainers = ["main"];
            launchAnimation(function() {
                return showCenterN(callback)
            });
        }

        $("#mainframe").swipe( swipeOptions );
    }
};

$Nav.openConsole = function (console, callback) {

    var lastContainer = $Nav.currentContainers.peek();

//    $Log.debug("--- openConsole " + console.group + "/" + console.name + " - " + lastContainer);

    if (console.container === undefined || console.container.length < 1) {
        console.container = $Nav.defaultConsoleContainer;
    }

    if (console.container === "page1") {
        $Nav.consolePage1 = console;
        $Nav.currentPage = "page1";
        if (lastContainer !== "page1")
            $Nav.currentContainers.push("page1");
        launchAnimation(function() { return showPageN(1, callback)});
    } else if (console.container === "page2") {
        $Nav.consolePage2 = console;
        $Nav.currentPage = "page2";
        if (lastContainer !== "page2")
            $Nav.currentContainers.push("page2");
        launchAnimation(function() { return showPageN(2, callback)});
    } else if (console.container === "page3") {
        $Nav.consolePage3 = console;
        $Nav.currentPage = "page3";
        if (lastContainer !== "page3")
            $Nav.currentContainers.push("page3");
        launchAnimation(function() { return showPageN(3, callback)});
    } else if (console.container === "page4") {
        $Nav.consolePage4 = console;
        $Nav.currentPage = "page4";
        if (lastContainer !== "page4")
            $Nav.currentContainers.push("page4");
        launchAnimation(function() { return showPageN(4, callback)});
    } else if (console.container === "page5") {
        $Nav.consolePage5 = console;
        $Nav.currentPage = "page5";
        if (lastContainer !== "page5")
            $Nav.currentContainers.push("page5");
        launchAnimation(function() { return showPageN(5, callback)});
    } else if (console.container === "footer-page") {
        $Nav.consoleFooterPage = console;
        if (lastContainer !== "footer-page")
            $Nav.currentContainers.push("footer-page");
        launchAnimation(function() { return showSouthN(callback)});
    } else if (console.container === "functions") {
        $Nav.consoleFunctions = console;
        if (lastContainer !== "functions")
            $Nav.currentContainers.push("functions");
        launchAnimation(function() { return showEastN(callback)});
    } else if (console.container === "main") {
        $Nav.consoleMain = console;
        if (lastContainer !== "main")
            $Nav.currentContainers.push("main");
        launchAnimation(function() { return showCenterN(callback)});
    }

    var swipeOptions = $.extend({}, $SwipeOptions, console.onSwipe());
    $("#mainframe").swipe( swipeOptions );
};
$Nav.closeConsole = function (console, callback) {

    var lastContainer = $Nav.currentContainers.peek();
    var dispatchCallback = null;

//    $Log.debug("--- closeConsole " + console.group + "/" + console.name + " - " + lastContainer);
    this.lastClosedConsole = lastContainer;

    if ($Nav.consoleFooterPage !== null && $Nav.consoleFooterPage.id === console.id) {
        $Nav.consoleFooterPage = null;
        launchAnimation(function() {
            return hideSouthN()
        });
        if (lastContainer === "footer-page") {
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                south("");
            });
        } else {

            if (callback)
                callback();
            
            south("");
        }

    } else if ($Nav.consoleFunctions !== null && $Nav.consoleFunctions.id === console.id) {
        $Nav.consoleFunctions = null;
        launchAnimation(function() {
            return hideEastN()
        });
        if (lastContainer === "functions") {
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback) {
                    callback();
                }
                east("");
            });
        } else {

            if (callback) {
                callback();
            }
            east("");
        }

    } else if ($Nav.consoleMain !== null && $Nav.consoleMain.id === console.id) {
        $Nav.consoleMain = null;
        if (lastContainer === "main") {
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                    
                center("");
            });
        } else {

            if (callback)
                callback();
            
            center("");
        }

    } else if ($Nav.consolePage1 !== null && $Nav.consolePage1.id === console.id) {
        $Nav.consolePage1 = null;
        launchAnimation(function() {
            return hidePageN(1)
        });

        if (lastContainer === "page1") {
            $Nav.currentPage = "page5";
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                page("", 1);
            });
        } else {

            if (callback)
                callback();
            
            page("", 1);
        }

    } else if ($Nav.consolePage2 !== null && $Nav.consolePage2.id === console.id) {
        $Nav.consolePage2 = null;
        launchAnimation(function() {
            return hidePageN(2)
        });
        
        if (lastContainer === "page2") {
            $Nav.currentPage = "page1";
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                page("", 2);
            });
        } else {

            if (callback)
                callback();
            
            page("", 2);
        }
    } else if ($Nav.consolePage5 !== null && $Nav.consolePage5.id === console.id) {
        $Nav.consolePage5 = null;
        launchAnimation(function() {
            return hidePageN(5)
        });
        
        if (lastContainer === "page5") {
            $Nav.currentPage = "page4";
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                page("", 5);
            });
        } else {

            if (callback)
                callback();
            
            page("", 5);
        }
    } else if ($Nav.consolePage4 !== null && $Nav.consolePage4.id === console.id) {
        $Nav.consolePage4 = null;
        launchAnimation(function() {
            return hidePageN(4)
        });
        
        if (lastContainer === "page4") {
            $Nav.currentPage = "page3";
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                page("", 4);
            });
        } else {

            if (callback)
                callback();
            
            page("", 4);
        }
    } else if ($Nav.consolePage3 !== null && $Nav.consolePage3.id === console.id) {
        $Nav.consolePage3 = null;
        launchAnimation(function() {
            return hidePageN(3)
        });
        
        if (lastContainer === "page3") {
            $Nav.currentPage = "page2";
            $Nav.currentContainers.pop();
            dispatchCallback = (function () {

                if (callback)
                    callback();
                
                page("", 3);
            });
        } else {

            if (callback)
                callback();
            
            page("", 3);
        }
    }

    if(dispatchCallback !== null) {
        $Nav.showLastContainer(dispatchCallback);
    }

};

//$Nav.trace = function() {
//
//        $Log.debug("===============================");
//        for(var c=0; c<$Nav.currentContainers.length; c++) {
//            $Log.debug("--- " + c + ":" + $Nav.currentContainers[c]);
//        }
//        $Log.debug("-------------------------------");
//        $Log.debug("--- consolePage1: " + ($Nav.consolePage1 === null ? "null" : ($Nav.consolePage1.id + " - " + $Nav.consolePage1.group + "/" + $Nav.consolePage1.name)));
//        $Log.debug("--- consolePage2: " + ($Nav.consolePage2 === null ? "null" : ($Nav.consolePage2.id + " - " + $Nav.consolePage2.group + "/" + $Nav.consolePage2.name)));
//        $Log.debug("--- consoleFooterPage: " + ($Nav.consoleFooterPage === null ? "null" : ($Nav.consoleFooterPage.id + " - " + $Nav.consoleFooterPage.group + "/" + $Nav.consoleFooterPage.name)));
//        $Log.debug("--- consoleMain: " + ($Nav.consoleMain === null ? "null" : ($Nav.consoleMain.id + " - " + $Nav.consoleMain.group + "/" + $Nav.consoleMain.name)));
//        $Log.debug("--- consoleFunctions: " + ($Nav.consoleFunctions === null ? "null" : ($Nav.consoleFunctions.id + " - " + $Nav.consoleFunctions.group + "/" + $Nav.consoleFunctions.name)));
//        $Log.debug("--- currentPage: " + $Nav.currentPage);
//        $Log.debug("===============================");
//}

var QuartisManager = function () {
    this.user = null;
    this.refreshPeriod = 5000;
    this.refreshTimer = true;
    this.waiting = false;
    this.dispatcherUrl = "";

    var consoles = [];
    var widgets = [];
    var swipers = [];

    function findWidgetById(id) {
        for (var i = 0; i < widgets.length; i++) {
            if (id === widgets[i].id) {
                return widgets[i];
            }
        }
        return null;
    }
    ;
    function findWidgetByGroupName(group, name) {
        for (var i = 0; i < widgets.length; i++) {
            if (group === widgets[i].group && name === widgets[i].name) {
                return widgets[i];
            }
        }
        return null;
    }
    ;
    function findConsoleById(id) {
        for (var i = 0; i < consoles.length; i++) {
            if (id === consoles[i].id) {
                return consoles[i];
            }
        }
        return null;
    }
    ;
    function findConsoleByGroupName(group, name) {
        for (var i = 0; i < consoles.length; i++) {
            if (group === consoles[i].group && name === consoles[i].name) {
                return consoles[i];
            }
        }
        return null;
    }
    ;
    function findConsoleByGroupNameExt(group, name, ext) {
        for (var i = 0; i < consoles.length; i++) {
            if (group === consoles[i].group && name === consoles[i].name && ext === consoles[i].ext) {
                return consoles[i];
            }
        }
        return null;
    }
    ;


    this.login = function (user) {
        this.user = user;

        var params = user.parameters;
        if (params !== undefined && params !== null) {
            $.each(params, function (key, val) {
                UserStore.setField(key, val);
            });
        }
    };

    this.logout = function () {
        this.user = null;
    };

    this.registerConsole = function (console) {
//        $Log.debug("Register console: " + console.group + " / " + console.name);

        this.waiting = true;

        console.onOpening();

        var current = findConsoleById(console.id);
        if (current === null) {
            consoles.push(console);
        }

        this.onConsoleRegistered(console);

        $Nav.openConsole(console, function() {
            console.onOpened();
        });

        this.waiting = false;
    };
    this.unregisterConsole = function (console) {
//        $Log.debug("Unregister console: " + console.group + " / " + console.name);

        this.waiting = true;

        for (var i = 0; i < console.widgets.length; i++) {
            var cw = console.widgets[i];

            var widget = findWidgetById(cw.id);
            if (widget !== null) {
                widget.onClosing();

                this.onWidgetUnregistered(widget);

                widget.onClosed();
            }
        }

        var current = findConsoleById(console.id);
        if (current !== null) {
            current.onClosing();

            this.onConsoleUnregistered(current);
        }

        this.waiting = false;
    };
    this.destroyConsole = function (console) {

        for (var i = 0; i < console.widgets.length; i++) {
            var cw = console.widgets[i];

            var widget = findWidgetById(cw.id);
            if (widget !== null) {
                widget.onDestroyed();

                var index = widgets.indexOf(widget);
                widgets.splice(index, 1);
            }
        }

        var current = findConsoleById(console.id);
        if (current !== null) {
            current.onDestroyed();

            var index = consoles.indexOf(current);
            consoles.splice(index, 1);
        }

    };
    this.openConsole = function (group, name, params) {
//        $Log.debug("Open console: " + group + " / " + name);
        this.loadConsole(null, group, name, null, params);
    };
    this.openRelativeConsole = function (path, group, name, params) {
//        $Log.debug("Open console: " + group + " / " + name);

        this.loadConsole(path, group, name, null, params);
    };
    this.openExtendedConsole = function (path, group, name, ext, params) {
//        $Log.debug("Open console Ext: " + group + " / " + name);

        this.loadConsole(path, group, name, ext, params);
    };
    this.openConsoleForm = function (group, name) {
        var current = findConsoleByGroupName(group, name);
        if (current !== null) {
            current.openForm();
        }
    };
    this.closeConsole = function (group, name, callback) {
//        $Log.debug("Close console: " + group + " / " + name);

        var current = findConsoleByGroupName(group, name);
        if (current !== null) {
            this.unregisterConsole(current);

            var self = this;
            $Nav.closeConsole(current, function () {
                current.onClosed();

                self.destroyConsole(current);

                if(callback !== undefined && callback !== null) {
                    callback();
                }
            });
        }
    };
    this.closeExtendedConsole = function (group, name, ext, callback) {
//        $Log.debug("Close console Ext: " + group + " / " + name);

        var current = findConsoleByGroupNameExt(group, name, ext);
        if (current !== null) {
            this.unregisterConsole(current);

            var self = this;
            $Nav.closeConsole(current, function () {
                current.onClosed();

                self.destroyConsole(current);

                if(callback !== undefined && callback !== null) {
                    callback();
                }
            });
        }
    };
    this.registerWidget = function (widget) {
        this.waiting = true;

        widget.onOpening();

        if ($('#' + widget.id + '_title').get(0) && widget.title !== '') {
            if ($('#' + widget.id + '_title').html() === '') {
                $('#' + widget.id + '_title').html(widget.title);
            }
        }

        var current = findWidgetById(widget.id);
        if (current === null) {
            widgets.push(widget);
        }

        this.onWidgetRegistered(widget);

        widget.onOpened();

        this.waiting = false;
    };
    this.onConsoleRegistered = function (console) {

    };
    this.onConsoleUnregistered = function (console) {

    };
    this.onWidgetRegistered = function (widget) {

    };
    this.onWidgetUnregistered = function (widget) {

    };
    this.loadWidget = function (id, group, name, width, height, refresh, params) {
        var lang = this.user !== null ? this.user.language : "";

        var urlParams = "";
        if (refresh !== undefined && refresh !== null && refresh > -1) {
            urlParams += "&refresh=" + refresh;
        }
        if (params !== undefined && params !== null) {
            $.each(params, function (key, val) {
                urlParams += "&param_" + key + "=" + encodeURI(val).replace(/'/g, "%27").replace(/#/g, "%23");
            });
        }

        var jsfile = $("<script type='text/javascript' src='widget?id=" + id + "&group=" + group + "&name=" + name + "&lang=" + lang + "&widgetWidth=" + width + "&widgetHeight=" + height + urlParams + "'></script>");
        $("head").append(jsfile);
    };
    this.openWidgetForm = function (group, name) {
        var current = findWidgetByGroupName(group, name);
        if (current !== null) {
            current.openForm();
        }
    };
    this.updateMemory = function (memory, value) {
        for (var i = 0; i < widgets.length; i++) {
            var w = widgets[i];
            if (w.memories.indexOf(memory) > -1) {
                w.onUpdateMemory(memory, value);
            }
        }
        for (var i = 0; i < consoles.length; i++) {
            var c = consoles[i];
            if (c.memories.indexOf(memory) > -1) {
                c.onUpdateMemory(memory, value);
            }
        }
    };
    this.executeScript = function (script) {
        var self = this;
        $.ajax({
            url: self.dispatcherUrl + "/quartispro-groovy/execute?" + script.url,
            type: 'post',
            data: (typeof script.params !== 'undefined' ? script.params : ''),
            dataType: (typeof script.type !== 'undefined' ? script.type : 'xml'),
            async: (typeof script.async !== 'undefined' ? script.async : true),
            crossDomain: true,
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
    
    this.forceRefreshData = function() {
        this.waiting = true;
        
        for (var i = 0; i < widgets.length; i++) {
            var w = widgets[i];
            if (w.onForceRefreshData !== undefined) {
                w.onForceRefreshData();
            }
        }
        
        this.waiting = false;
    };
    
    this.refreshData = function () {
        this.waiting = true;

        for (var i = 0; i < widgets.length; i++) {
            try {
                var w = widgets[i];
                w.onRefreshData();
            } catch (e) {
                throw new Error(e);
            }
        }
        for (var i = 0; i < consoles.length; i++) {
            try {
                var c = consoles[i];
                c.onRefreshData();
            } catch (e) {
                throw new Error(e);
            }
        }

        this.waiting = false;
    };
    this.scheduleRefreshData = function () {

        if (!this.waiting) {
            this.refreshData();
        }

        if (this.refreshTimer && this.refreshPeriod > 0) {
            setTimeout($.proxy(this.scheduleRefreshData, this), this.refreshPeriod);
        }
    };



    this.loadConsole = function (path, group, name, ext, params) {
        var self = this;

        var lang = this.user !== null ? this.user.language : "";
        var width = $(window).width();
        var height = $(window).height();

        var paramExt = "";
        if (path !== undefined && path !== null && path.trim() !== '') {
            paramExt += "&path=" + path;
        }
        if (ext !== undefined && ext !== null && ext.trim() !== '') {
            paramExt += "&ext=" + ext;
        }

        var urlParams = "";
        if (params !== undefined && params !== null) {
            $.each(params, function (key, val) {
                urlParams += "&param_" + key + "=" + encodeURI(val).replace(/'/g, "%27");
            });
        }

        var cssLink = $("<link rel='stylesheet' type='text/css' href='console?group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&pageWidth=" + width + "&pageHeight=" + height + "&action=css" + urlParams + "' />");
        $("head").append(cssLink);

        $.ajax({
            url: "console",
            type: 'post',
            data: "group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&pageWidth=" + width + "&pageHeight=" + height + "&action=html",
            dataType: 'xml',
            async: false,
            crossDomain: true,
            success: function (data, status) {
                $xml = $(data);
                $content = $xml.find("console");

                var id = $content.attr("id");
                var containerType = $content.attr("container");

                var consoleWidth = eval("'" + $content.attr("width") + "'");
                var consoleHeight = eval("'" + $content.attr("height") + "'");
                consoleWidth = consoleWidth.replace(/px/g, '');
                consoleHeight = consoleHeight.replace(/px/g, '');

                //var html = "<div id=\"" + id + "\" class=\"center-div\" style=\"width: " + consoleWidth + "px; height: " + consoleHeight + "px;\"></div>";
                var html = "<div id=\"" + id + "\" class=\"" + id + " center-div\"></div>";

//                $Log.debug("Load console: " + group + " / " + name + " in " + containerType);

                if (containerType === "main") {

                    if ($Nav.consoleMain !== null) {
                        self.unregisterConsole($Nav.consoleMain);

                        self.destroyConsole($Nav.consoleMain);
                    }
                    $Nav.consoleMain = null;

                    center(html);

                    var jsfile = $("<script type='text/javascript' src='console?group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&pageWidth=" + width + "&pageHeight=" + height + "&consoleWidth=" + consoleWidth + "&consoleHeight=" + consoleHeight + "&action=js" + urlParams + "'></script>");
                    $("head").append(jsfile);

                } else if (containerType === "footer-page") {

                    if ($Nav.consoleFooterPage !== null) {
                        self.unregisterConsole($Nav.consoleFooterPage);

                        self.destroyConsole($Nav.consoleFooterPage);
                    }
                    $Nav.consoleFooterPage = null;

                    south(html);

                    var jsfile = $("<script type='text/javascript' src='console?group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&pageWidth=" + width + "&pageHeight=" + height + "&consoleWidth=" + consoleWidth + "&consoleHeight=" + consoleHeight + "&action=js" + urlParams + "'></script>");
                    $("head").append(jsfile);


                } else if (containerType === "functions") {

                    if ($Nav.consoleFunctions !== null) {
                        self.unregisterConsole($Nav.consoleFunctions);

                        self.destroyConsole($Nav.consoleFunctions);
                    }
                    $Nav.consoleFunctions = null;
                    east(html);

                    var jsfile = $("<script type='text/javascript' src='console?group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&pageWidth=" + width + "&pageHeight=" + height + "&consoleWidth=" + consoleWidth + "&consoleHeight=" + consoleHeight + "&action=js" + urlParams + "'></script>");
                    $("head").append(jsfile);


                } else {     

                    var container = "";
                    
                    var existingContainer = $("#" + id);
                    
                    if (existingContainer[0] !== undefined && existingContainer[0].id !== undefined && $("#" + existingContainer[0].id).children().length > 0) {
                        
                        
                        var parentClassName = existingContainer.parent()[0].className;
                        
                        var pageNumber = 0;
                        if (parentClassName.indexOf('swap-page1') > -1) {
                            pageNumber = 1;
                        } else if (parentClassName.indexOf('swap-page2') > -1) {
                            pageNumber = 2;
                        } else if (parentClassName.indexOf('swap-page3') > -1) {
                            pageNumber = 3;
                        } else if (parentClassName.indexOf('swap-page4') > -1) {
                            pageNumber = 4;
                        } else if (parentClassName.indexOf('swap-page5') > -1) {
                            pageNumber = 5;
                        }
                        
                        $Nav.defaultConsoleContainer = "page" + pageNumber;
                        container = $Nav.defaultConsoleContainer;
                    } else {
                        switch($Nav.currentPage) {
                            case "page1":
                                container = "page2";
                                page(html, 2);
                                break;
                            case "page2":
                                container = "page3";
                                page(html, 3);
                                break;
                            case "page3":
                                container = "page4";
                                page(html, 4);
                                break;
                            case "page4":
                                container = "page5";
                                page(html, 5);
                                break;
                            default:
                                container = "page1"
                                page(html, 1);
                                break;
                        }

                        var jsfile = $("<script type='text/javascript' src='console?group=" + group + "&name=" + name + paramExt + "&lang=" + lang + "&container=" + container + "&pageWidth=" + width + "&pageHeight=" + height + "&consoleWidth=" + consoleWidth + "&consoleHeight=" + consoleHeight + "&action=js" + urlParams + "'></script>");
                        $("head").append(jsfile);
                    }
                }

                self.refreshData();
            },
            error: function (data, status, error) {
                throw new Error("Open Console: " + group + "/" + name + paramExt + " failed.");
            }
        });

    }
}
