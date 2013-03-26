// MobileRouter.js
// ---------------
define(["app", "models/Model", "views/View", "views/shoppinglist/ShoppingListView", "views/recipes/RecipeView"],

    function (app, UserModel, View, ShoppingListView, RecipeView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function () {

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
                new RecipeView({id:id});
            },
            index: function () {
                // Instantiates a new view which will render the header text to the page
                new View();
            }
        });

        return MobileRouter;
    }
);