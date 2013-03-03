define( ['backbone'],
        function( Backbone ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingListItem = Backbone.Model.extend( {
                url: function(){ return "http://ccc.local:3000/shoppinglists/" + this.id},

                defaults: function() {
                      return {
                        title: "...",
                        done: false
                      };
                    },
                initialize: function() {
                      if (!this.get("title")) {
                        this.set({"title": this.defaults().title});
                      }
                    },
                toggle: function() {
                      this.save({checked: !this.get("checked")});
                    }


            } );

            return ShoppingListItem;
        } );
