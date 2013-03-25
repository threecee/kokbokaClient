define( ["app", 'models/ShoppingListIngredient', 'models/ShoppingListIngredients'],
        function(app, ShoppingListIngredient, ShoppingListIngredients ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.ShoppingLists.ShoppingList = Backbone.RelationalModel.extend( {
                url: "http://ccc.local:9000/json/shoppinglists",
                relations: [
                       {
                         type: Backbone.HasMany,
                         key: 'shoppingListIngredients',
                         relatedModel: app.ns.ShoppingLists.ShoppingListIngredient,
                         collectionType: app.ns.ShoppingLists.ShoppingListIngredients,
                         reverseRelation: {
                            key: "shoppingList",
                            includeInJSON: ["class","entityId","id","persistent"]
                         }
                       }
                     ],
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 },
                reset: function(attrinutes){
                    console.log('Reset %o', attrinutes);

                }

            } );
            return app.ns.ShoppingLists.ShoppingList;
        } );
            
  //              initialize: function(attributes) {

               //     this.set('shoppingListIngredients', new ShoppingListItems());
               //     this.set('shoppingListIngredients', new ShoppingListItems());

           //         this.on('shoppingListIngredients:add', this.add, this);
           //        this.on('shoppingListIngredients:reset', this.reset, this);
           //     this.on('shoppingListIngredients:all', this.all, this);

                   //this.set('shoppingListIngredients', new ShoppingListItems(attributes.shoppingListIngredients || []));
//                 },
          //      parse: function( response ) {
          //          this.shoppingListIngredients = new ShoppingListItems(response.shoppingListIngredients || []);

          //          return response;


          //      }
