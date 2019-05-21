if (!Array.prototype.peek){
    Array.prototype.peek = function() {
        return this.slice(-1)[0];
    };
};

if (!String.prototype.insertAt){
    String.prototype.insertAt = function(index, string) { 
      return this.substr(0, index) + string + this.substr(index);
    };
};

var $Q = {};

$Q.exec = function(func) {
  if(func !== undefined) {
    if(typeof func === "string") {
      eval(func);
    } else if(typeof func === "function") {
      func();
    }
  }
};

$Q.eval = function(val, dft) { 
    if(val === undefined)
        return dft;
    if(typeof val !== "string")
        return val;
    if(typeof val === "string" && val.indexOf("@eval") > -1)
        return eval(val.replace(/@eval/g, ''));    
    if(typeof val === "string" && val.indexOf("{") > -1)
        //return eval(val.replace(/\{\}/g, ''));
        return val.replace(/\{(.*)\}/g, function(str, grp1) { return eval(grp1); });
    return val; 
};

$Q.data = function(val, data) {    
    if((val === undefined) || (typeof val !== "string") || (val.indexOf("@data") === -1)) {       
        return val;        
    }  
    if(typeof data === "object") {           
        return val.replace(/@data\[(\w+)\]/g, function(str, grp1) { return data[grp1]; });
    } else if(typeof data === "array") {        
        return val.replace(/@data\[(\d+)\]/g, function(str, grp1) { return data[Number(grp1)]; });
    } else {             
        return val;        
    }
};

$Q.find = function(src, id) {
    var obj = src.refs[id];
    return obj === undefined ? null : obj;
};


var $Log = {
    level: 'INFO',
    dateFormat: 'DD HH:mm:ss.SSS',
    onInfo: function (msg) {
        console.log(msg);
    },
    onWarning: function (msg) {
        console.log(msg);
    },
    onError: function (msg) {
        console.log(msg);
    },
    onDebug: function (msg) {
        console.log(msg);
    }
};

$Log.info = function(msg) {
    $Log.onInfo(moment().format($Log.dateFormat) + " - " + $Log.level + ": " + msg);
};
$Log.warning = function(msg) {
    switch ($Log.level) {
        case 'INFO':
            break;
        case 'ERROR':
            break;
        default:
            $Log.onWarning(moment().format($Log.dateFormat) + " - " + $Log.level + ": " + msg);
            break;
    }
};
$Log.error = function(msg) {
    $Log.onError(moment().format($Log.dateFormat) + " - " + $Log.level + ": " + msg);
};
$Log.debug = function(msg) {
    switch ($Log.level) {
        case 'INFO':
            break;
        case 'WARNING':
            break;
        case 'ERROR':
            break;
        default:
            $Log.onDebug(moment().format($Log.dateFormat) + " - " + $Log.level + ": " + msg);
            break;
    }
};