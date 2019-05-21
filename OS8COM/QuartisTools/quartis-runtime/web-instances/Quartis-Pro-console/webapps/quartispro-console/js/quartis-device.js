function isAndroidMobile() {
    var isAndroid = false;
    var width = $(window).width();
    var height = $(window).height();

    if (width < 400 && height < 750 && window.navigator.userAgent.toLowerCase().indexOf('mobile console') > -1) {
        isAndroid = true;
    }

    return isAndroid;
}

function isDlAxist() {
    var isDlAxist = false;
    
    if (navigator.userAgent.toLowerCase().indexOf('dl-axist') > -1) {
        isDlAxist = true;
    }

    return isDlAxist;
}