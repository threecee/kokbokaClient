define(function() {

  // app is used as shared storage for the application. This is not ideal,
  // but has its uses.
  var app = {};

  // app.ns is used for namespacing, mostly used with Backbone-relational.
  app.ns = {};
  app.ns.ShoppingLists = {};
  app.ns.Recipes = {};



  return app;
});


/*
define( ['jquery', '../utils', 'services'],
        function( $, utils, services ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";
           
           $(function(){
               var app = {};
               var app.ns = {};

            window.kokboka = window.kokboka || {
                services: services,
                utils: utils
            }
        });

        } );
 */