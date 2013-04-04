define( ["app", 'models/RecipeInMenu'],
        function(app, RecipeInMenu ) {
           // "use strict";

            app.ns.Menus.RecipesInMenu = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/menus",
                model: app.ns.Menus.RecipeInMenu,
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 }

            } );
            return app.ns.Menus.RecipesInMenu;
        } );
