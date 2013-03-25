define( ["app", 'models/ShoppingList'],
        function(  ShoppingList ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.ShoppingLists.ShoppingLists = Backbone.Collection.extend( {
                url: "xxxhttp://ccc.local:9000/json/shoppinglists",
                model: ShoppingList,
                //localStorage: new Backbone.LocalStorage("shoppinglists-backbone"),
                parse: function( response ) {
                    return response;
                }


            } );

            return app.ns.ShoppingLists.ShoppingLists;
        } );
            
