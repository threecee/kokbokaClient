define( ["app", 'models/Ingredient', 'models/Ingredients'],
        function(app, Ingredient, Ingredients ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.Recipes.Recipe = Backbone.RelationalModel.extend( {
                urlRoot: "http://ccc.local:9000/json/recipes",
                relations: [
                       {
                         type: Backbone.HasMany,
                         key: 'ingredients',
                         relatedModel: app.ns.Recipes.Ingredient,
                         collectionType: app.ns.Recipes.Ingredients,
                         reverseRelation: {
                            key: "recipe",
                            includeInJSON: ["class","entityId","id","persistent"]
                         }
                       }
                     ],
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 },
                reset: function(attrinutes){
                    console.log('Reset %o', attrinutes);

                }

            } );
            return app.ns.Recipes.Recipe;
        } );
