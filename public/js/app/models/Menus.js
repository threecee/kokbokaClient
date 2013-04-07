define( ["app", 'models/Menu'],
        function(app, Menu ) {
           // "use strict";

            app.ns.Menus.MenusClass = Backbone.Collection.extend( {
                url: "http://ccc.local:9000/json/menus",
                model: app.ns.Menus.Menu,
              initialize: function(attributes) {
                    console.log(this, 'Initialized');
                 }

            } );
            app.ns.Menus.Menus = new app.ns.Menus.MenusClass();
            return app.ns.Menus.Menus;
        } );
