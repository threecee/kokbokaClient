define( [ 'app', 'models/Ingredient'],
        function(app,  Ingredient ) {
            "use strict";

            app.ns.Recipes.Ingredients = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/recipes/ingredient",
                model: app.ns.Recipes.Ingredient,
                initialize: function(attributes) {
                     // console.log(this, 'Initialized');
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

            return app.ns.Recipes.Ingredients;
        } );
            
