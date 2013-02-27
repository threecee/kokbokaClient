define( ['jquery', 'backbone', 'models/Model', 'models/ResultCollection', 'text!templates/recipes/recipeview.html'],
        function( $, Backbone, ResultCollection, recipeView ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ShowRecipe = Backbone.View.extend( {
                el: $( "#showRecipe #recipe" ),

                initialize: function() {
                    this.collection = new ResultCollection;
                    _.bindAll(this, "renderList");
                    this.entry.bind( "reset", this.renderList );
                },

                renderList: function() {

                    var compiled_template = _.template( recipeView ),
                        collection = this.collection,
                        $el = $(this.el);

                  //  mobileSearch.utils.toggleNavigation( true );
                    $el.html( compiled_template( { result: collection.get(0) } ) );

                    setTimeout( function() {
                       $el.trigger('create');
                    }, 0 );

                }
            } );

            return ShowRecipe;
        });
