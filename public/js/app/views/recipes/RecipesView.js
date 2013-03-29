define( ['app', 'models/Recipes', 'text!templates/recipes/listview.html'],
        function(app, Recipes, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var RecipesView = Backbone.View.extend( {
                template : _.template( listTemplate ),
                el:   "#recipes #recipesListview",
                initialize: function() {
                    //_.bindAll(this, "render");
                    this.collection = app.ns.Recipes.Recipes;
                    this.listenTo(this.collection, "reset", this.render );
                    this.listenTo(this, "rendered", this.options.routing);
                    this.listenTo(this, "rendered", this.transitionView );


                    if (this.collection.size() == 0) {
                        console.log(this, 'Fetching recipes');
                        this.collection.fetch({silent: false});//.then(this.transitionView);
                    }
                    else {
                        console.log(this, 'Rendering existing recipes');
                        this.transitionView();
                        this.trigger("rendered");
                    }



                },
                render: function(attribute) {
                    console.log(this, 'render');
                    var collection = this.collection;
                    var $el = $(this.el);
                    $el.html(this.template({ results: collection.models }));
                    this.trigger("rendered");
                    },

                transitionView: function(doReverse) {
                    console.log(this, 'transitionView');
                    var $el = $(this.el);
                    setTimeout( function() {
                            $(document).bind('pageinit', "#recipes", function () {
                                $el.listview('refresh');
                                 //$("#showRecipe #recipe").trigger("create");
                            });
                        //$.mobile.changePage( "#recipes", { transition: "slide", reverse:doReverse, changeHash: false} );
                    }, 0 );

                   }

            } );

            return RecipesView;
        });
