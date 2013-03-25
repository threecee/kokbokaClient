define( [ 'app', 'models/ShoppingList'],
        function(app,  ShoppingList ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.ShoppingLists.ShoppingListIngredient = Backbone.RelationalModel.extend( {
                url: function(){ return "http://ccc.local:9000/json/shoppinglists/shoppinglistitem"}, ///" + this.id

                defaults: function() {
                      return {
                        title: "...",
                        done: false
                      };
                    },
                initialize: function() {
                     console.log(this, 'Initialized');
                      if (!this.get("title")) {
                        this.set({"title": this.defaults().title});
                      }
                    },
                toggle: function() {
                      this.save({checked: !this.get("checked")});
                    }


            } );

            return app.ns.ShoppingLists.ShoppingListIngredient;
        } );
