var Grid = function (console) {
    this.console = console;
    this.width = 0;
    this.height = 0;
    this.widgets = [];

    this.findWidgetById = function (id) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (id === this.widgets[i].id) {
                return this.widgets[i];
            }
        }
        return null;
    }
    ;
    this.serialize = function () {
        var obj = {
            code: console.code,
            group: console.group,
            name: console.name,
            width: this.width,
            height: this.height,
            widgets: this.widgets
        }
        return JSON.stringify(obj);
    }
    ;
};
var QuartisManagerGrid = function (lang) {
    this.language = lang;
    this.gridStep = 10;
    this.grid = null;
    this.categories = [];
    this.consoles = [];
    this.resolutions = [];
    this.widgets = [];

    var widgets = [];

    this.findConsoleByCode = function (code) {
        for (var i = 0; i < this.consoles.length; i++) {
            if (code === this.consoles[i]["code"]) {
                return this.consoles[i];
            }
        }
        return null;
    }
    ;
    this.findResolutionByCode = function (code) {
        for (var i = 0; i < this.resolutions.length; i++) {
            if (code === this.resolutions[i]["code"]) {
                return this.resolutions[i];
            }
        }
        return null;
    }
    ;
    this.findWidgetById = function (id) {
        for (var i = 0; i < this.categories.length; i++) {
            for (var j = 0; j < this.categories[i].widgets.length; j++) {
                if (id === this.categories[i].widgets[j].id) {
                    return JSON.parse(JSON.stringify(this.categories[i].widgets[j]));
                }
            }
        }
        return null;
    }
    ;
    this.registerWidget = function (widget) {

        widget.onEditing();

        if ($('#' + widget.id + '_title').get(0) && widget.title !== '') {
            if ($('#' + widget.id + '_title').html() === '') {
                $('#' + widget.id + '_title').html(widget.title);
            }
        }

        var current = null;
        for (var i = 0; i < widgets.length; i++) {
            if (widget.id === widgets[i].id) {
                current = widgets[i];
                break;
            }
        }

        if (current === null) {
            widgets.push(widget);
        }

        this.onWidgetRegistered(widget);
    };
    this.onWidgetRegistered = function (widget) {

    };
    this.onWidgetUnregistered = function (widget) {

    };
    this.loadWidget = function (id, group, name, width, height, params) {
        var lang = this.language !== null ? this.language : "en";
        var widgetID = getWidgetID(id);

        var urlParams = "";
        if (params !== undefined && params !== null) {
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                urlParams += "&param_" + param['name'] + "=" + encodeURI(param['value']).replace(/'/g, "%27").replace(/#/g, "%23");
            }
        }
        var src = "widget?id=" + widgetID + "&group=" + group + "&name=" + name + "&lang=" + lang + "&widgetWidth=" + width + "&widgetHeight=" + height +"&customDOMId=" + id + urlParams;
        var jsfile = $("<script type='text/javascript' src='" + src + "'></script>");
        $("head").append(jsfile);
    };
    this.openWidgetForm = function (group, name) {
    };
    this.loadCategories = function (labelAddWidget) {
        var self = this;
        $.ajax({
            url: "editor",
            type: 'post',
            data: {action: "widgets", lang: self.language},
            dataType: 'json',
            async: true,
            success: function (data, status) {
                self.categories = data;
                self.widgets = [];

                var html = "";

                for (var i = 0; i < self.categories.length; i++) {
                    var category = self.categories[i];

                    html += ""
                            + "<div class=\"list-group-item\">"
                            + " <h4 class=\"list-group-item-heading\">" + category['category'] + "</h4>"
                            + " <div id=\"cat" + i + "\" class=\"carousel slide\" data-ride=\"carousel\">";

                    html += "<ol class=\"carousel-indicators\">";
                    for (var j = 0; j < category['widgets'].length; j++) {
                        html += "<li data-target=\"#cat" + i + "\" data-slide-to=\"" + j + "\"" + (j === 0 ? " class=\"active\"" : "") + "></li>";
                    }
                    html += "</ol>";

                    html += "<div class=\"carousel-inner\" role=\"listbox\">";
                    for (var j = 0; j < category['widgets'].length; j++) {
                        var widget = category['widgets'][j];
                        self.widgets.push(widget);

                        html += "<div class=\"item" + (j === 0 ? " active" : "") + "\">"
//                                + "<div style=\"background-color: red\">"
                                + "<table style=\"table-layout: fixed; width: 100%; height: 100px;\">"
                                + " <tr>"
                                + "  <td rowspan=\"2\" width=\"20%\">"
                                + "   <img src=\"" + widget['image'] + "\" alt=\"" + widget['description'] + "\" width=\"100\" style=\"margin-left: 10px\" />"
                                + "  </td>"
                                + "  <td width=\"50%\" style=\"word-wrap:break-word\"><b><span style=\"font-size: 18px\">" + widget['label'] + "</span></b></td>"
                                + "  <td rowspan=\"2\" width=\"10%\">"
                                + "   <button id=\"btn" + widget['id'] + "\" type=\"button\" class=\"btn btn-default btnWidget\" onclick=\"addWidget('" + widget['id'] + "')\">" + labelAddWidget + "</button>"
                                + "  </td>"
                                + "  <td rowspan=\"2\" width=\"20%\"></td>"
                                + " </tr>"
                                + " <tr>"
                                + "  <td width=\"50%\" style=\"word-wrap:break-word\"><i>" + widget['description'] + "</i></td>"
                                + " </tr>"
                                + "</table>"
//                                + "</div>"
                                + "</div>";
                    }
                    html += "</div>";

                    html += "<a class=\"left carousel-control\" href=\"#cat" + i + "\" role=\"button\" data-slide=\"prev\">"
                            + " <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>"
                            + " <span class=\"sr-only\">Précédent</span>"
                            + "</a>"
                            + "<a class=\"right carousel-control\" href=\"#cat" + i + "\" role=\"button\" data-slide=\"next\">"
                            + " <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>"
                            + " <span class=\"sr-only\">Suivant</span>"
                            + "</a>";

                    html += " </div>"
                            + "</div>";
                }

                $("#categories").html(html);

                $('.carousel').carousel({interval: false});
            },
            error: function (data, status, error) {
            }
        });
    };
    this.loadConsoles = function (codeLabel, groupLabel, nameLabel, designationLabel, resolutionLabel) {
        var self = this;
        $.ajax({
            url: "editor",
            type: 'post',
            data: {action: "consoles", lang: lang},
            dataType: 'json',
            async: true,
            success: function (data, status) {
                self.consoles = data;

                var html = ""
                        + "<table class=\"table\">"
                        + " <tr>"
                        + "  <th>" + codeLabel + "</th>"
                        + "  <th>" + groupLabel + "</th>"
                        + "  <th>" + nameLabel + "</th>"
                        + "  <th>" + designationLabel + "</th>"
                        + "  <th>" + resolutionLabel + "</th>"
                        + "  <th><span class=\"glyphicon glyphicon-plus\" onclick=\"newConsole()\"></span></th>"
                        + " </tr>"

                for (var i = 0; i < data.length; i++) {
                    var console = data[i];

                    html += ""
                        + " <tr>"
                        + "  <td>" + console['code'] + "</td>"
                        + "  <td>" + console['group'] + "</td>"
                        + "  <td>" + console['name'] + "</td>"
                        + "  <td>" + console['designation'] + "</td>"
                        + "  <td>" + console['resolution']['designation'] + "</td>"
                        + "  <td>"
                        + "   <span class=\"glyphicon glyphicon-pencil\" onclick=\"editConsole('" + console['code'] + "')\"></span>"
                        + "   <span class=\"glyphicon glyphicon-duplicate\" onclick=\"copyConsole('" + console['code'] + "')\"></span>"
                        + "   <span class=\"glyphicon glyphicon-th-large\" onclick=\"openConsole('" + console['code'] + "')\"></span>"
                        + "   <span class=\"glyphicon glyphicon-trash\" onclick=\"showDeleteConfirmDialog('" + console['code'] + "')\"></span>"
                        + "  </td>"
                        + " </tr>";
                }

                $("#consoles").html(html);
            },
            error: function (data, status, error) {
            }
        });
    };
    this.loadResolutions = function () {
        var self = this;
        $.ajax({
            url: "editor",
            type: 'post',
            data: {action: "resolutions", lang: self.language},
            dataType: 'json',
            async: true,
            success: function (data, status) {
                self.resolutions = data;

                var html = "";

                for (var i = 0; i < self.resolutions.length; i++) {
                    var resolution = self.resolutions[i];

                    html += "<option value=\"" + resolution['code'] + "\">" + resolution['designation'] + "</option>";
                }

                $("#consoleResolution").html(html);
            },
            error: function (data, status, error) {
            }
        });
    };
}
