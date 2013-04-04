define( ["app", 'models/Recipe'],
        function(app, Recipe ) {
           // "use strict";

            app.ns.Recipes.RecipesClass = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/recipes",
                model: Recipe,
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 }

            } );
            app.ns.Recipes.Recipes = new app.ns.Recipes.RecipesClass();
            return app.ns.Recipes.Recipes;
        } );
