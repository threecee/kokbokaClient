// MobileRouter.js
// ---------------
define(["app", "models/Model", "views/View", "views/shoppinglist/ShoppingListView", "views/recipes/RecipeView", "views/recipes/RecipesView", "views/menus/MenuView"],

    function (app, UserModel, View, ShoppingListView, RecipeView, RecipesView, MenuView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function () {
                this.on('all', this.detectDirection);

                window.linkClicked = false;
                window.backDetected = false;
                window.previousFragment = null;

            },

            routes: {
                "shoppinglist/current": "shoppinglist",
                "recipes/all": "recipes",
                "recipe/:id": "recipe",
                "menus/all": "menus",
                "menu/:week": "menu",
                "": "index"
            },
            detectDirection: function (event) {
                if (event != "route") {
                    console.log("DirectionDetector for event %s", event);
                    currentFragment = Backbone.history.getFragment();
                    window.backDetected = false;  // assume no back detected

                    if (!window.linkClicked && currentFragment == window.previousFragment) {
                        window.backDetected = true;
                    }

                    window.linkClicked = false;  // reset

                    console.log("\t\tbackDetected %s", backDetected);
                    console.log("\t\tpreviousFragment %s", window.previousFragment);
                    console.log("\t\tcurrentFragment %s", currentFragment);

                    window.previousFragment = currentFragment;
                }

            },
            routing: function(){
                console.log(this, "Routing to " + this.options.destination);
                $.mobile.changePage(this.options.destination, { transition: "slide", reverse: window.backDetected, changeHash: false})
            },
            shoppinglist: function () {
                //kokboka.services.allrecipes();
                new ShoppingListView();
            },

            recipes: function () {
                new RecipesView({routing: this.routing, destination:"#recipes"});
            },
            recipesRouting: function () {
                this.slideTo("#recipes");
            },
            recipe: function (id) {
                new RecipeView({id: id, routing: this.routing, destination:"#showRecipe"});
            },
            recipeRouting: function () {
                this.slideTo("#showRecipe");
            },

            menu: function (week) {
                new MenuView({id: week, routing: this.routing, destination:"#menuShow"});
            },
            menuRouting: function () {
                this.slideTo("#menuShow");
            },


            index: function () {
                // Instantiates a new view which will render the header text to the page
                new View();
            },

            slideTo: function (destination) {
                console.log(this, "Routing to " + destination);
                $.mobile.changePage(destination, { transition: "slide", reverse: window.backDetected, changeHash: false})

            }
        });

        return MobileRouter;
    }
);