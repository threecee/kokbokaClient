define( [ 'app', 'models/Recipe'],
        function(app,  Recipe ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.Recipes.Ingredient = Backbone.RelationalModel.extend( {
                url: function(){ return "http://ccc.local:9000/json/recipes/ingredient"}, ///" + this.id

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
                    }


            } );

            return app.ns.Recipes.Ingredient;
        } );
