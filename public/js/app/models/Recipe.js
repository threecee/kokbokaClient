define( ["app", 'models/Ingredient', 'models/Ingredients', 'models/Tag', 'models/Tags'],
        function(app, Ingredient, Ingredients, Tag, Tags ) {
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
                       },
                    {
                      type: Backbone.HasMany,
                      key: 'tags',
                      relatedModel: app.ns.Recipes.Tag,
                      collectionType: app.ns.Recipes.Tags,
                      reverseRelation: {
                         key: "recipe",
                         includeInJSON: ["class","entityId","id","persistent", "name", "nameHash"]
                      }
                       }
                     ],
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 },
                reset: function(attrinutes){
                 //   console.log('Reset %o', attrinutes);

                }

            } );
            return app.ns.Recipes.Recipe;
        } );
