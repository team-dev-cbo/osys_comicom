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

var SwapPages = React.createClass({
    componentDidMount: function () {
        
        var width = $("#mainframe").width();
        var height = $("#mainframe").height();
        
        $(".swap-container").width(width);
        $(".swap-container").height(height);

        $(".swap-page1, .swap-page2, .swap-page3, .swap-page4, .swap-page5").css("width", width);
        $(".swap-page1, .swap-page2, .swap-page3, .swap-page4, .swap-page5").css("height", height);
        $(".swap-page1, .swap-page2, .swap-page3, .swap-page4, .swap-page5").css("left", "0px");
        $(".swap-page1, .swap-page2, .swap-page3, .swap-page4, .swap-page5").css("top", "0px");
        $(".swap-page1, .swap-page2, .swap-page3, .swap-page4, .swap-page5").hide();
    },
    render: function () {
        return React.createElement("div", {className: 'swap-container'},
            React.createElement("div", {className: 'swap-page1 swap-tab-V'}, ''),
            React.createElement("div", {className: 'swap-page2 swap-tab-V'}, ''),
            React.createElement("div", {className: 'swap-page3 swap-tab-V'}, ''),
            React.createElement("div", {className: 'swap-page4 swap-tab-V'}, ''),
            React.createElement("div", {className: 'swap-page5 swap-tab-V'}, '')
                );
    },
    page: function(html, id) {
        if (html || html === "") {
            $(".swap-page"+id).html(html);
        }
        return $(".swap-page"+id)
    },
    isHidden: function (cmp) {
        return cmp.css('display') === 'none' || cmp.css('visibility') === 'hidden';
    }

});
