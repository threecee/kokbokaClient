define( [ 'app', 'models/Recipe'],
        function(app,  Recipe ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            app.ns.Recipes.Tag = Backbone.RelationalModel.extend( {
                url: function(){ return "http://ccc.local:9000/json/recipes/tag"}, ///" + this.id
                initialize: function(attributes) {
                    console.log(this, 'Initialized');
                   }
            } );

            return app.ns.Recipes.Tag;
        } );
