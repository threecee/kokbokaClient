// MobileRouter.js
// ---------------
define(["app", "models/Model", "views/View", "views/shoppinglist/ShoppingListView", "views/recipes/RecipeView", "views/recipes/RecipesView", "views/menus/MenuView", "views/menus/MenusView"],

    function (app, UserModel, View, ShoppingListView, RecipeView, RecipesView, MenuView, MenusView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function () {
                this.on('all', this.detectDirection);

                window.linkClicked = false;
                window.backDetected = false;
                window.previousFragment = null;

            },

            routes: {
                "shoppinglist/current": "shoppinglist_current",
                "shoppinglist/:id": "shoppinglist",
                "recipes": "recipes",
                "recipe/:id": "recipe",
                "menus": "menus",
                "menu/:week": "menu",
                "back": "back",
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
            back: function(){
                Backbone.history.history.back();
                var previousPage = Backbone.history.location;
                console.log(this, "Routing to " + previousPage);
                $.mobile.changePage(previousPage, { transition: "slide", reverse: true, changeHash: false});
            },
            routing: function(){
                console.log(this, "Routing to " + this.options.destination);
                $.mobile.changePage(this.options.destination, { transition: "slide", reverse: window.backDetected, changeHash: false})
            },
            shoppinglist: function (id) {
                new ShoppingListView({id: id, routing: this.routing, destination:"#shoppinglist"});
            },
            shoppinglist_current: function () {
                new ShoppingListView({routing: this.routing, destination:"#shoppinglist"});
            },

            recipes: function () {
                new RecipesView({routing: this.routing, destination:"#recipes"});
            },
            recipe: function (id) {
                new RecipeView({id: id, routing: this.routing, destination:"#showRecipe"});
            },

            menus: function () {
                new MenusView({routing: this.routing, destination:"#menus"});
            },
            menu: function (week) {
                new MenuView({id: week, routing: this.routing, destination:"#menuShow"});
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