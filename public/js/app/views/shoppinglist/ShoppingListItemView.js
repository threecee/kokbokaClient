define( ['jquery', 'backbone', 'models/ShoppingListItem', 'text!templates/shoppinglist/shoppinglistitem.html'],
        function( $, Backbone, ShoppingListItem, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingListItemView = Backbone.View.extend( {
                template : _.template( listTemplate ),

                events: {
                      "change div.ui-checkbox input:checkbox"   : "toggleDone"
//                      "click a.destroy" : "clear",
//                      "keypress .edit"  : "updateOnEnter",
//                      "blur .edit"      : "close"
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

            return ShoppingListItemView;
        });
