define( [ 'app', 'models/ShoppingListIngredient'],
        function(app,  ShoppingListIngredient ) {
            "use strict";

            app.ns.ShoppingLists.ShoppingListIngredients = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/shoppinglists/shoppinglistitem",
                model: ShoppingListIngredient,
                //localStorage: new Backbone.LocalStorage("shoppinglists-backbone"),
                initialize: function(attributes) {
                      console.log(this, 'Initialized');
                   },
                parse: function( response ) {
                    return response;
                },

                done: function() {
                      return this.filter(function(item){ return item.get('done'); });
                    },
                remaining: function() {
                      return this.without.apply(this, this.done());
                    },
                nextOrder: function() {
                      if (!this.length) return 1;
                      return this.last().get('order') + 1;
                    },
                comparator: function(item) {
                      return item.get('order');
                    }

            } );

            return app.ns.ShoppingLists.ShoppingListIngredients;
        } );
            
