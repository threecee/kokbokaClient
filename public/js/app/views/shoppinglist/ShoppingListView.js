define( ['models/ShoppingList', 'views/shoppinglist/ShoppingListItemView', 'text!templates/shoppinglist/shoppinglist.html'],
        function(ShoppingList, ShoppingListItemView, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingListView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                shopping : new ShoppingList(),
                hasRendered: false,
                initialize: function() {
                    _.bindAll(this, 'createOnEnter');
                    $(document).bind('keypress', this.createOnEnter);

                    this.input = $("input#add-item-input");
                    this.allCheckbox = this.$("#toggle-all")[0];


                    this.shopping.on( 'add:shoppingListIngredients', this.addOne);

                   // this.listenTo(this.shopping, 'add:shoppingListIngredients', this.addOneFinal);
                    this.listenTo(this.shopping, 'change:shoppingListIngredients', this.updateView);
                    this.listenTo(this.shopping, 'change', this.updateView);
                    this.listenTo(this.shopping, 'all', this.render);

                    this.main = $('#main');

                    console.log(this, 'Fetching shoppinglist');
                    this.shopping.fetch({silent: false}).then(this.transitionView);
                    //this.shopping.fetchRelated("shoppingListIngredients");


                },
                render: function(attribute) {
//                      var done = this.shopping.done().length;
  //                    var remaining = this.shopping.remaining().length;
                    console.log( 'render %o', attribute );
                    },
                addOne: function(shoppingListItem) {
                    console.log(this, 'addOne');
                     var view = new ShoppingListItemView({model: shoppingListItem});

                    var listTarget = "#ingredient-tasks";
                    if(shoppingListItem.attributes.checked)
                    {
                        listTarget = "#completed-tasks";
                    }

                    var target = "#shoppinglist " + listTarget + " fieldset";
                    if($("#shoppinglist " + listTarget + " fieldset .ui-controlgroup-controls").length){
                        target = "#shoppinglist " + listTarget + " fieldset .ui-controlgroup-controls";
                    }
                    if(this.hasRendered){
                        $(target).prepend(view.render().el);
                        this.updateView(shoppingListItem);
                    }
                    else {
                        $(target).append(view.render().el);
                    }
                   },
                addAndInjectOne: function(shoppingListItem) {
                    console.log(this, 'addAndInjectOne');
                    this.addOne(shoppingListItem);
                    this.updateView(shoppingListItem);
                   },
                updateView: function(shoppingListItem) {
                    console.log(this, 'updateView');
                    $("#shoppinglist #ingredient-tasks").trigger("create");
                    $("#shoppinglist #completed-tasks").trigger("create");
                   },
                transitionView: function() {
                    console.log(this, 'transitionView');
                    setTimeout( function() {
                            $(document).bind('pageinit', "#shoppinglist", function () {
                             //   $("#shoppinglist #ingredient-tasks").trigger("create");
//                                $("#shoppinglist #ingredient-tasks").listview("refresh");
                            });
                        $.mobile.changePage( "#shoppinglist", { transition: "slide", reverse:false, changeHash: false} );
                        this.hasRendered = true;
                    }, 0 );

                   },
                addAll: function() {
                    console.log(this, 'addAll');
                    this.shopping.get("shoppingListIngredients").each(this.addOne, this);
                    setTimeout( function() {
                            $(document).bind('pageinit', "#shoppinglist", function () {
                                $("#shoppinglist #ingredient-tasks").trigger("create");
//                                $("#shoppinglist #ingredient-tasks").listview("refresh");
                            });
                        $.mobile.changePage( "#shoppinglist", { transition: "slide", reverse:false, changeHash: false} );
                    }, 0 );

                  },
                collectionInitialized: function() {
                    console.log(this, 'collectionInitialized');
                    this.shopping.get("shoppingListIngredients").each(this.addOne, this);
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

                    this.shopping.get("shoppingListIngredients").create({description: this.input.val(), checked:false, amount:null, unit:null, type:"onthefly", shoppingList:this.shopping.id});
                     this.input.val('');
                   },
                clearCompleted: function() {
                     _.invoke(this.shopping.get("shoppingListIngredients").done(), 'destroy');
                     return false;
                   }
            } );

            return ShoppingListView;
        });
