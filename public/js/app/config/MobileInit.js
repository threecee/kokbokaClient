// MobileInit.js
// -------------
require.config({

  deps:["main"],

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "app": "app/app",
      "main": "app/main",
      "jquery": "libs/jquery-1.9.1",
      "jquerymobile": "libs/jquery.mobile-1.3.0",
      "underscore": "libs/underscore-1.4.4",
      "backbone": "libs/backbone-0.9.10",
      "backbone-relational": "libs/backbone-relational-0.8.0",
      "backbone-all": "libs/backbone-all",
      "moment": "libs/moment-2.0.0",

      // Plugins
      // -------
     // "backbone.validateAll": "libs/plugins/Backbone.validateAll",

      "text": "libs/plugins/text-2.0.5",
      "moment-lang": "libs/plugins/moment-lang-nb",

      // Application Folders
      // -------------------
      "collections": "app/collections",

      "models": "app/models",

      "config": "app/config",

      "routers": "app/routers",

      "templates": "app/templates",

      "utils": "app/utils",
      "views": "app/views"

  },

  // Sets the dependency and shim configurations
  // - Helpful for including non-AMD compatible scripts and managing dependencies
  shim: {

      // jQuery Mobile
      "jquerymobile": ["jquery"],

      // moment language plugin
      "moment-lang": ["moment"],

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



      "backbone-relational": ["backbone"],
      // Backbone.validateAll plugin that depends on Backbone
    //  "backbone.validateAll": ["backbone"]

      // Configure dependencies for the main application.
      "main": ["backbone-all"]

  }

});
