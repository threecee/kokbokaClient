// TestInit.js
require.config({

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


      "jasmine": "libs/jasmine",

      "jasmine-html": "libs/jasmine-html",

      // Plugins
      // -------
      "backbone.validateAll": "libs/plugins/Backbone.validateAll",
 //     "bootstrap": "libs/plugins/bootstrap",
      "jasminejquery": "libs/plugins/jasmine-jquery",

      "moment-lang": "libs/plugins/moment-lang-nb",
      "text": "libs/plugins/text-2.0.5",

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

  // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        // jQuery Mobile
        "jquerymobile": ["jquery"],

      // moment language plugin
      "moment-lang": ["moment"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"],

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
        "main": ["backbone-all"],

              // Backbone.validateAll depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine Unit Testing
      "jasmine": {

        // Exports the global 'window.jasmine' object
        "exports": "jasmine"

      },

      // Jasmine Unit Testing helper
      "jasmine-html": {

        "deps": ["jasmine"],

        "exports": "jasmine"

      }
    }


});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(["jquery", "backbone", "jasmine-html", "jquerymobile", "backbone.validateAll"],

  function($, Backbone, jasmine) {

    specs = [];
 
  //  specs.push('test/specs/spec');
    specs.push('test/specs/menuspec');
      specs.push('test/specs/dateutilspec');

 
    $(function() {
    
      require(specs, function() {

        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());

        jasmine.getEnv().execute();

    
      });

    });

  }

);