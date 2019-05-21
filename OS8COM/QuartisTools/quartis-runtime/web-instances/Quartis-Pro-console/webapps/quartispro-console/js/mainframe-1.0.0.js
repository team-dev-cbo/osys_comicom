(function ($) {
    $.fn.invisible = function () {
        return this.each(function () {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function () {
        return this.each(function () {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

var lastShowCallback = undefined;

var Mainframe = React.createClass({
    componentDidMount: function () {
        var width = $(".mainframe").width();
        var height = $(".mainframe").height();

        //$(".mainframe-tabs-H").css("min-width", width * 3);
        $(".mainframe-tabs-H").css("height", height);
        //$(".mainframe-tabs-H").css("left", ((-1) * width) + "px");
        $(".mainframe-tabs-H").css("left", "0px");
        $(".mainframe-tabs-H").css("width", width);

        $(".mainframe-center").css("width", width);
        $(".mainframe-center").css("height", height);
        //$(".mainframe-center").visible();
        $(".mainframe-center").show();

        $(".mainframe-east").css("width", width);
        $(".mainframe-east").css("height", height);
        $(".mainframe-east").css("top", "0px");
        $(".mainframe-east").css("left", "0px");
        //$(".mainframe-east").invisible();
        $(".mainframe-east").hide();

        $(".mainframe-west").css("width", width);
        $(".mainframe-west").css("height", height);
        //$(".mainframe-west").invisible();
        $(".mainframe-west").hide();

        $(".mainframe-north").css("width", width);
        $(".mainframe-north").css("height", height);
        //$(".mainframe-north").css("top", ((-1) * height) + "px");
        $(".mainframe-north").css("left", "0px");
        //$(".mainframe-north").invisible();
        $(".mainframe-north").hide();
        $(".mainframe-north").css("top", "0px");

        $(".mainframe-south").css("width", width);
        $(".mainframe-south").css("height", height);
        //$(".mainframe-south").css("top", (height) + "px");
        $(".mainframe-south").css("left", "0px");
        //$(".mainframe-south").invisible();
        $(".mainframe-south").hide();
        $(".mainframe-south").css("top", "0px");

        $(".mainframe-modal").hide();
    },
    render: function () {
        return React.createElement("div", {className: 'mainframe'},
                React.createElement("div", {className: 'mainframe-tabs'},
                    React.createElement("div", {className: 'mainframe-tabs-H'},
                        React.createElement("div", {className: 'mainframe-west mainframe-tab-H'}, ''),
                        React.createElement("div", {className: 'mainframe-center mainframe-tab-H'}, '')
                    ),
                    React.createElement("div", {className: 'mainframe-modal'}),
                    React.createElement("div", {className: 'mainframe-east mainframe-tabs-V'}, ''),
                    React.createElement("div", {className: 'mainframe-north mainframe-tabs-V'}, ''),
                    React.createElement("div", {className: 'mainframe-south mainframe-tabs-V'}, '')
                )
        );
    },
    center: function (html) {
        if (html) {
            $(".mainframe-center").html(html);
        }
        return $(".mainframe-center")
    },
    east: function (html) {
        if (html) {
            $(".mainframe-east").html(html);
        }
        return $(".mainframe-east")
    },
    west: function (html) {
        if (html) {
            $(".mainframe-west").html(html);
        }
        return $(".mainframe-west")
    },
    north: function (html) {
        if (html) {
            $(".mainframe-north").html(html);
        }
        return $(".mainframe-north")
    },
    south: function (html) {
        if (html) {
            $(".mainframe-south").html(html);
        }
        return $(".mainframe-south")
    },
    reset: function (callback) {
        var self = this;

        var isResettingNorthTwice = false;

        if (!self.isHidden($(".mainframe-north"))) {
          // On gère le cas de l'ouverture en nord de deux fenêtre consécutive (elles se ferment et se rouvre)
          // Si on reset le nord pour le rouvrir juste après (ouverture dans le callback), on le ne fait pas
          if (callback !== undefined && callback.toString().indexOf('north.visible') === -1) {
            var $north = $(".mainframe-north");
            $north.animate({'top': '-=' + $north.height() + 'px'}, $Nav.animationSpeed, function () {
                $north.invisible();
                self.reset(callback);
            });
          }
          // On garde en mémoire qu'on a bloqué l'ouverture
          else {
            isResettingNorthTwice = true;
          }

        } else if (!self.isHidden($(".mainframe-south"))) {
            var $south = $(".mainframe-south");

            // -- On cache la fenetre Sud ==> Incremente nbHideShouth
            nbHideShouth += 1;

            var heightS = $south.height();

            // -- Si nbHideShouth > 1 : On ne fait pas l'animation sinon, on ne poura pas rafficher la fenetre sud
            if (nbHideShouth > 1){
                heightS = 0;
            }
            $south.animate({'top': '+=' + heightS + 'px'}, $Nav.animationSpeed, function () {
                $south.invisible();
                self.reset(callback);
            });

        } else if (!self.isHidden($(".mainframe-west"))) {
            var $west = $(".mainframe-west");
            var $tabs = $('.mainframe-tabs-H');
            $tabs.animate({'left': '-=' + $west.width() + 'px'}, $Nav.animationSpeed, function () {
                $west.invisible();
                self.reset(callback);
            });

        } else if (!self.isHidden($(".mainframe-east"))) {
            var $east = $(".mainframe-east");
            var $tabs = $('.mainframe-tabs-H');
            $tabs.animate({'left': '+=' + $east.width() + 'px'}, $Nav.animationSpeed, function () {
                $east.invisible();
                self.reset(callback);
            });

        } else if (callback && !isResettingNorthTwice) {
          self.toggleModal();

          callback();
        } else {
            self.toggleModal();
        }

        // Si l'ouverture a été bloqué, on rejoue le callback d'ouverture de la fenêtre
        // Pour gèrer correctement les possibles swappages entre la page 1 et la page 2
        if (isResettingNorthTwice && lastShowCallback !== undefined) {
          lastShowCallback();
        }
    },
    showCenter: function (callback) {
        this.reset(callback);
    },
    showEast: function (callback) {
        var self = this;
        var $east = $(".mainframe-east");

        if (self.isHidden($east)) {

            self.reset(function () {
                $east.visible();
                var $tabs = $('.mainframe-tabs-H');
                $tabs.animate({'left': '-=' + $east.width() + 'px'}, $Nav.animationSpeed, function () {
                    self.toggleModal();

                    if (callback) {
                        callback();
                    }
                });
            });

        } else if (callback) {
            callback();
        }
    },
    showWest: function (callback) {
        var self = this;
        var $west = $(".mainframe-west");

        if (self.isHidden($west)) {
            self.reset(function () {
                $west.visible();
                var $tabs = $('.mainframe-tabs-H');
                $tabs.animate({'left': '+=' + $west.width() + 'px'}, $Nav.animationSpeed, function () {
                    self.toggleModal();

                    if (callback) {
                        callback();
                    }
                });
            });

        } else if (callback) {
            callback();
        }
    },
    showNorth: function (callback) {
        var self = this;
        var $north = $(".mainframe-north");

        if (self.isHidden($north)) {
            lastShowCallback = callback;
            self.reset(function () {

                var $modal = $(".mainframe-modal");
                $modal.show();

                $north.visible();

                $north.animate({'top': '+=' + $north.height() + 'px'}, $Nav.animationSpeed, function () {
                    self.toggleModal();

                    if (callback) {
                        callback();
                    }
                });
            });

        } else if (callback) {
            callback();
        }
    },
    showSouth: function (callback) {
        var self = this;
        var $south = $(".mainframe-south");

        if (self.isHidden($south)) {
            self.reset(function () {

                var $modal = $(".mainframe-modal");
                $modal.show();

                $south.visible();

                // -- Affiche la fenetre sud => Reinitialise le nbre de fois q'on va la cacher
                nbHideShouth = 0;

                $south.animate({'top': '-=' + $south.height() + 'px'}, $Nav.animationSpeed, function () {
                    self.toggleModal();

                    if (callback) {
                        callback();
                    }
                });
            });

        } else if (callback) {
            callback();
        }
    },
    hideEast: function (callback) {
        var self = this;
        var $east = $(".mainframe-east");

        if (!self.isHidden($east)) {
            self.reset(callback);

        } else if (callback) {
            callback();
        }
    },
    hideWest: function (callback) {
        var self = this;
        var $west = $(".mainframe-west");

        if (!self.isHidden($west)) {
            self.reset(callback);

        } else if (callback) {
            callback();
        }
    },
    hideNorth: function (callback) {
        var self = this;
        var $north = $(".mainframe-north");

        if (!self.isHidden($north)) {
            self.reset(callback);

        } else if (callback) {
            callback();
        }
    },
    hideSouth: function (callback) {
        var self = this;
        var $south = $(".mainframe-south");

        if (!self.isHidden($south)) {
            self.reset(callback);

        } else if (callback) {
            callback();
        }
    },
    isHidden: function (cmp) {
        return cmp.css('display') === 'none' || cmp.css('visibility') === 'hidden';
    },
    toggleModal: function () {
        if (this.isHidden($(".mainframe-south")) && this.isHidden($(".mainframe-north"))) {
            $(".mainframe-modal").hide();
        } else {
            $(".mainframe-modal").show();
        }
    }
});
