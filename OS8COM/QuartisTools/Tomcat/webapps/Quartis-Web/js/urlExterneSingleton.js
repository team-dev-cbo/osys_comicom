var UrlExternSingleton = function(urlExterne) {

    if ( UrlExternSingleton.prototype._singletonInstance ) {
      return UrlExternSingleton.prototype._singletonInstance;
    }
    UrlExternSingleton.prototype._singletonInstance = this;
    var test = urlExterne;

    this.getUrlExterne = function() {
      return urlExterne;
    };
  };