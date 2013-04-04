define(["app", 'models/Recipe', 'models/Menu'],
    function (app, Recipe, Menu) {
        "use strict";

        app.ns.Menus.RecipeInMenu = Backbone.RelationalModel.extend({
            urlRoot: "http://ccc.local:9000/json/menus",
            initialize: function(attributes) {
                   console.log(this, 'Initialized');
                },
            relations: [
               /* {
                    type: Backbone.HasOne,
                    key: 'menu',
                    relatedModel: app.ns.Menus.Menu
                },*/
                {
                    type: Backbone.HasOne,
                    key: 'recipe',
                    relatedModel: app.ns.Recipes.Recipe
                }
            ]

        });
        return app.ns.Menus.RecipeInMenu;
    });
