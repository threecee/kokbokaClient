define( ['models/Recipe', 'views/recipes/IngredientView', 'text!templates/recipes/recipe.html'],
        function(Recipe, IngredientView, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var RecipeView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                el:  "#showRecipe #recipe",
                initialize: function() {

                    this.recipe = new Recipe({id:this.id});

                    this.listenTo(this.recipe, 'all', this.render);

                    console.log(this, 'Fetching recipe');
                    this.recipe.fetch({silent: false})//.then(this.transitionView);

                    this.listenTo(this.recipe, 'sync', this.transitionView);

                },
                render: function(attribute) {
//                      var done = this.shopping.done().length;
  //                    var remaining = this.shopping.remaining().length;
                    console.log( 'render %o', attribute );
                    },

                transitionView: function(context) {
                    console.log(this, 'transitionView');
                    this.$el = $(this.el);
                    this.$el.html(this.template(this.recipe.toJSON()));
                    setTimeout( function() {
                            $(document).bind('pageinit', "#showRecipe", function () {
                                 $("#showRecipe #recipe").trigger("create");
                            });
                        $.mobile.changePage( "#showRecipe", { transition: "slide", reverse:false, changeHash: false} );
                    }, 0 );

                   }

            } );

            return RecipeView;
        });
