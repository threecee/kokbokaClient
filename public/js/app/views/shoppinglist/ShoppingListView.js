define( ['jquery', 'backbone', 'models/ShoppingList', 'views/shoppinglist/ShoppingListItemView', 'text!templates/shoppinglist/shoppinglist.html'],
        function($,  Backbone, ShoppingList, ShoppingListItemView, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingListView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                shopping : new ShoppingList(),
                initialize: function() {
                    _.bindAll(this, 'createOnEnter');
                    $(document).bind('keypress', this.createOnEnter);

                    this.input = $("input#add-item-input");
                    this.allCheckbox = this.$("#toggle-all")[0];

                    this.listenTo(this.shopping, 'add', this.addOneFinal);
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
                    if($("#shoppinglist #ingredient-tasks fieldset .ui-controlgroup-controls").length){
                        $("#shoppinglist #ingredient-tasks fieldset .ui-controlgroup-controls").append(view.render().el);
                    }
                     else{
                        $("#shoppinglist #ingredient-tasks fieldset").append(view.render().el);
                    }
                   },
                addOneFinal: function(shoppingListItem) {
                    var view = new ShoppingListItemView({model: shoppingListItem});
                   if($("#shoppinglist #ingredient-tasks fieldset .ui-controlgroup-controls").length){
                       $("#shoppinglist #ingredient-tasks fieldset .ui-controlgroup-controls").prepend(view.render().el);
                   }
                    else{
                       $("#shoppinglist #ingredient-tasks fieldset").prepend(view.render().el);
                   }
                    $("#shoppinglist #ingredient-tasks").trigger("create");
                   },

                addAll: function() {
                    this.shopping.shoppingListIngredients.each(this.addOne, this);
                    setTimeout( function() {
                            $(document).bind('pageinit', "#shoppinglist", function () {
                                $("#shoppinglist #ingredient-tasks").trigger("create");
//                                $("#shoppinglist #ingredient-tasks").listview("refresh");
                            });
                        $.mobile.changePage( "#shoppinglist", { transition: "slide", reverse:false, changeHash: false} );
                    }, 0 );

                  },
                createOnEnter: function(e) {

                    if(e.target.id != "add-item-input") return;
                    if (e.keyCode != 13) return;
                     if (!this.input.val()) return;

                    this.shopping.shoppingListIngredients.create({description: this.input.val(), checked:false, amount:null, unit:null, type:"onthefly", shoppingList:this.shopping.id});
                     this.input.val('');
                   },
                clearCompleted: function() {
                     _.invoke(this.shopping.shoppingListIngredients.done(), 'destroy');
                     return false;
                   }
            } );

            return ShoppingListView;
        });
