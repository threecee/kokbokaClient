define(["app", 'models/RecipeInMenu', 'models/RecipesInMenu', 'utils/DayMapper'],
    function (app, RecipeInMenu, RecipesInMenu) {
        "use strict";

        app.ns.Menus.Menu = Backbone.RelationalModel.extend({
            urlRoot: "http://ccc.local:9000/json/menus",
            relations: [
                {
                    type: Backbone.HasMany,
                    key: 'recipesInMenu',
                    relatedModel: app.ns.Menus.RecipeInMenu,
                    collectionType: app.ns.Menus.RecipesInMenu
                }
            ],
            getRecipeForDay: function (day) {
                var menuDay = app.ns.utils.DayMapper.FromIndex[day];
                var theRecipe = null;

                this.get("recipesInMenu").each(function (recipeInMenu) {
                    if (recipeInMenu.get("usedForDay") == menuDay) {
                        theRecipe = recipeInMenu.get("recipe");
                    }
                });

                return theRecipe;
            }

        });
        return app.ns.Menus.Menu;
    });
