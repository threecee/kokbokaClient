(function() {

var RemoteSync = function (method, model, options) {
    options.timeout = 10000; // required, or the application won't pick up on 404 responses
    options.dataType = "jsonp";
    options.url = "http://localhost:9000/" +  options.url;
    return Backbone.sync(method, model, options);
};
return RemoteSync;
})();