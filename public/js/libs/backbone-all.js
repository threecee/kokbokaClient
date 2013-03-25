define([
    'jquery',
    'backbone',
    'backbone-relational'
],

function($, Backbone) {
    // Put any custom Backbone modifications here

    Backbone.baseUrl = 'http://localhost:9000';
    Backbone.useJSONP = true;
   // Backbone.Relational.store.addModelScope( exports );

    //Backbone.emulateHTTP = true;
    //Backbone.emulateJSON = true;


    //Backbone.emulateHTTP = true;

    Backbone.ajaxSync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
       /*
        if(method == "read"){
        options.timeout = 10000; // required, or the application won't pick up on 404 responses
        options.dataType = "jsonp";
        }
        */
        options.xhrFields = {withCredentials: true};
        options.crossDomain = true;

        return Backbone.ajaxSync(method, model, options);
    };

    return Backbone;
});