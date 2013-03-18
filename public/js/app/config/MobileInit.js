// MobileInit.js
// -------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "libs/jquery-1.9.1",
      "jquerymobile": "libs/jquery.mobile-1.3.0",
      "underscore": "libs/underscore-1.4.4",
      "backbone": "libs/backbone-0.9.10",
      "backbone-relational": "libs/backbone-relational-0.8.0",
      "backbone-all": "libs/backbone-all",

      // Plugins
      // -------
     // "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "text": "libs/plugins/text-2.0.5",

      // Application Folders
      // -------------------
      "collections": "app/collections",

      "models": "app/models",

      "config": "app/config",

      "routers": "app/routers",

      "templates": "app/templates",

      "views": "app/views"

  },

  // Sets the dependency and shim configurations
  // - Helpful for including non-AMD compatible scripts and managing dependencies
  shim: {

      // jQuery Mobile
      "jquerymobile": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      'underscore': {
           exports: '_'
       },



      "backbone-relational": ["backbone"]
      // Backbone.validateAll plugin that depends on Backbone
    //  "backbone.validateAll": ["backbone"]

  }

});

// Include Mobile Specific JavaScript files here (or inside of your Mobile router)
require(["jquery", "backbone", "routers/MobileRouter", "jquerymobile", "app"],

  function($, Backbone, MobileRouter) {

    // Prevents all anchor click handling
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;

      $.mobile.linkBindingEnabled = false;
      $.mobile.ajaxEnabled  = false;



    // Instantiates a new Mobile Router instance
    new MobileRouter();

  }

);