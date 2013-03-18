define( ['jquery', 'backbone',  'models/ShoppingListItem', 'models/ShoppingListItems'],
        function( $, Backbone, ShoppingListItem, ShoppingListItems ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingList = Backbone.Model.extend( {
                url: "http://ccc.local:9000/json/shoppinglists",
                initialize: function(attributes) {
               //     this.set('shoppingListIngredients', new ShoppingListItems());
               //     this.set('shoppingListIngredients', new ShoppingListItems());

                    this.on('shoppingListIngredients:add', this.add, this);
                   this.on('shoppingListIngredients:reset', this.reset, this);
                this.on('shoppingListIngredients:all', this.all, this);

                   //this.set('shoppingListIngredients', new ShoppingListItems(attributes.shoppingListIngredients || []));
                 },
                parse: function( response ) {
                    this.shoppingListIngredients = new ShoppingListItems(response.shoppingListIngredients || []);

                    return response;


                }

            } );
            return ShoppingList;
        } );
            
