define( [ 'app', 'models/Tag'],
        function(app,  Tag ) {
            "use strict";

            app.ns.Recipes.Tags = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/recipes/ingredient",
                model: app.ns.Recipes.Tag

            } );

            return app.ns.Recipes.Tags;
        } );
            
