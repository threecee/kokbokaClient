define( ['app', 'models/Menus', 'text!templates/menus/listview.html', "utils/DateUtil"],
        function(app, Menus, listTemplate, DateUtil ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var MenusView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                el:   "#menus #menusListview",
                initialize: function() {
                    //_.bindAll(this, "render");
                    this.collection = app.ns.Menus.Menus;
                    this.listenTo(this.collection, "reset", this.render );
                    this.listenTo(this, "rendered", this.options.routing);
                    this.listenTo(this, "rendered", this.transitionView );


                    if (this.collection.size() == 0) {
                        console.log(this, 'Fetching menus');
                        this.collection.fetch({silent: false});//.then(this.transitionView);
                    }
                    else {
                        console.log(this, 'Rendering existing menus');
                        this.transitionView();
                        this.trigger("rendered");
                    }



                },
                render: function(attribute) {
                    console.log(this, 'render');
                    var collection = this.collection;
                    var $el = $(this.el);
                    $el.html(this.template({ results: collection.models, app:app }));
                    this.trigger("rendered");
                    },

                transitionView: function(doReverse) {
                    console.log(this, 'transitionView');
                    var $el = $(this.el);
                    setTimeout( function() {
                            $(document).bind('pageinit', "#menus", function () {
                                $el.listview('refresh');
                                 //$("#showMenu #menu").trigger("create");
                            });
                        //$.mobile.changePage( "#menus", { transition: "slide", reverse:doReverse, changeHash: false} );
                    }, 0 );

                   }

            } );

            return MenusView;
        });
