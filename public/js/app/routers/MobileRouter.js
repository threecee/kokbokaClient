// MobileRouter.js
// ---------------
define(["app", "models/Model", "views/View", "views/shoppinglist/ShoppingListView", "views/recipes/RecipeView", "views/recipes/RecipesView"],

    function (app, UserModel, View, ShoppingListView, RecipeView, RecipesView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function () {
               this.on('all', this.detectDirection);

           window.linkClicked = false;
           window.backDetected = false;
           window.previousFragment = null;

            },

            routes: {
                "shoppinglist/current": "shoppinglist",      // #recipes/all
                "recipes/all": "recipes",      // #recipes/all
                "recipe/:id": "recipe",      // #recipe/id
                "": "index"
            },
            detectDirection: function(event){
                console.log("DirectionDetector for event %s", event);
                    currentFragment = Backbone.history.getFragment();
                    window.backDetected = false;  // assume no back detected

                    if (!window.linkClicked && currentFragment == window.previousFragment)
                    {
                        window.backDetected = true;
                    }

                    window.linkClicked = false;  // reset

                console.log("\t\tbackDetected %s", backDetected);
                console.log("\t\tpreviousFragment %s", window.previousFragment);
                console.log("\t\tcurrentFragment %s", currentFragment);

                    window.previousFragment = currentFragment;


            },
            shoppinglist: function () {
                //kokboka.services.allrecipes();
                 new ShoppingListView();
            },
            recipes: function () {
                recipesView = new RecipesView({routing:this.recipesRouting});

            },
            recipesRouting: function(){
                console.log(this, "Routing to recipes");
                   $.mobile.changePage( "#recipes", { transition: "slide", reverse:window.backDetected, changeHash: false} )

            },
            recipe: function (id) {
                new RecipeView({id:id, routing: this.recipeRouting});
            },
            recipeRouting: function(){
                console.log(this, "Routing to recipe");
                $.mobile.changePage("#showRecipe", { transition: "slide", reverse: window.backDetected, changeHash: false});

            },
            index: function () {
                // Instantiates a new view which will render the header text to the page
                new View();
            }
        });

        return MobileRouter;
    }
);