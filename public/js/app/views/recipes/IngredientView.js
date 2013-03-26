define( ['jquery', 'backbone', 'models/Ingredient', 'text!templates/recipes/ingredient.html'],
        function( $, Backbone, Ingredient, itemTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var IngredientView = Backbone.View.extend( {
                template : _.template( itemTemplate ),

                events: {
                      "change div.ui-checkbox input:checkbox"   : "toggleDone"
                    },
                initialize: function() {
                   this.listenTo(this.model, 'change', this.render);
                   this.listenTo(this.model, 'destroy', this.remove);
                 },
                render: function() {
                    var shouldRender = true;
                      if(this.$el.children().length > 0  != '' && this.$el.attr("checked") == 'true' && this.model.checked)
                      {
                          shouldRender = false;
                      }
                    if(this.$el.children().length > 0  && this.$el.attr("checked") != 'true' && !this.model.checked)
                    {
                        shouldRender = false;
                    }

                    if(shouldRender)
                    {
                        this.$el.html(this.template(this.model.toJSON()));
                    }

                      return this;
                    },
                toggleDone: function() {
                     this.model.toggle();
                   }
            } );

            return IngredientView;
        });
