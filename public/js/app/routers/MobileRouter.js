// MobileRouter.js
// ---------------
define(["jquery", "backbone", "models/Model", "views/View", "views/shoppinglist/ShoppingListView"],

    function ($, Backbone, UserModel, View, ShoppingListView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function () {

                // Prevents all anchor click handling
                $.mobile.linkBindingEnabled = false;

                // Disabling this will prevent jQuery Mobile from handling hash changes
                $.mobile.hashListeningEnabled = false;

                $.mobile.linkBindingEnabled = false;
                $.mobile.ajaxEnabled = false;

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

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
            },

            // All of your Backbone Routes (add more)
            routes: {
                "shoppinglist/current": "shoppinglist",      // #recipes/all
                "recipes/all": "recipes",      // #recipes/all
                "recipe/:id": "recipe",      // #recipe/id
                // When there is no hash bang on the url, the home method is called
                "": "index"
            },

            shoppinglist: function () {
                //kokboka.services.allrecipes();
                new ShoppingListView();
            },
            recipes: function () {
                kokboka.services.allrecipes();
            },
            recipe: function (id) {
                kokboka.services.getRecipe(id);
            },
            index: function () {
                // Instantiates a new view which will render the header text to the page
                new View();
            }
        });

        return MobileRouter;
    }
);