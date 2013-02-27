define( ['jquery', 'backbone', 'models/ShoppingList', 'views/shoppinglist/ShoppingListItemView', 'text!templates/shoppinglist/shoppinglist.html'],
        function( $, Backbone, ShoppingList, ShoppingListItemView, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingListView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                shopping : new ShoppingList(),
                initialize: function() {

                    this.input = this.$("#add-item-input");
                    this.allCheckbox = this.$("#toggle-all")[0];

                    this.listenTo(this.shopping, 'add', this.addOne);
                    this.listenTo(this.shopping, 'reset', this.addAll);
                    this.listenTo(this.shopping, 'all', this.render);

                    this.main = $('#main');

                    this.shopping.fetch();

                },
                render: function() {
//                      var done = this.shopping.done().length;
  //                    var remaining = this.shopping.remaining().length;

                    },
                addOne: function(shoppingListItem) {
                     var view = new ShoppingListItemView({model: shoppingListItem});
                     $("#shoppinglist #ingredient-tasks fieldset").append(view.render().el);
                   },

                addAll: function() {
                    this.shopping.each(this.addOne, this);
                    setTimeout( function() {
                            $(document).bind('pageinit', "#shoppinglist", function () {
                                $("#shoppinglist #ingredient-tasks").trigger("create");
//                                $("#shoppinglist #ingredient-tasks").listview("refresh");
                            });
                        $.mobile.changePage( "#shoppinglist", { transition: "slide", reverse:false, changeHash: false} );
                    }, 0 );

                  },
                createOnEnter: function(e) {
                     if (e.keyCode != 13) return;
                     if (!this.input.val()) return;

                    this.shopping.create({title: this.input.val()});
                     this.input.val('');
                   },
                clearCompleted: function() {
                     _.invoke(this.shopping.done(), 'destroy');
                     return false;
                   }
            } );

            return ShoppingListView;
        });
