define(['app', 'models/Recipe', 'views/recipes/IngredientView', 'text!templates/recipes/recipe.html'],
    function (app, Recipe, IngredientView, listTemplate) {
        // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
        "use strict";

        var RecipeView = Backbone.View.extend({
            template: _.template(listTemplate),
            el: "#showRecipe #recipe",
            initialize: function () {

                this.listenTo(this, "rendered", this.options.routing);
                this.listenTo(this, "rendered", this.transitionView );

                if (app.ns.Recipes.Recipes.size() > 0) {
                    this.recipe = app.ns.Recipes.Recipes.find(
                        function (therecipe) {
                            return therecipe.attributes.id == this.id
                        }, this);
                    this.render();
                }
                else {
                    this.recipe = new Recipe({id: this.id});
                    console.log(this, 'Fetching recipe');
                    this.recipe.fetch({silent: false});
                }

                this.listenTo(this.recipe, 'sync', this.render);

            },
            render: function (attribute) {
                console.log('render %o', attribute);
                this.$el = $(this.el);
                this.$el.html(this.template(this.recipe.toJSON()));
                this.trigger("rendered");
            },

            transitionView: function () {
                console.log(this, 'transitionView');
                        $("#showRecipe").trigger("create");
            }

        });

        return RecipeView;
    });
