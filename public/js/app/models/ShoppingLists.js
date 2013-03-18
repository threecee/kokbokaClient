define( ['jquery', 'backbone', 'models/ShoppingList'],
        function( $, exports, Backbone, ShoppingList ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShoppingLists = Backbone.Collection.extend( {
                url: "xxxhttp://ccc.local:9000/json/shoppinglists",
                model: ShoppingList,
                //localStorage: new Backbone.LocalStorage("shoppinglists-backbone"),
                parse: function( response ) {
                    return response;
                }


            } );

            return ShoppingLists;
        } );
            
