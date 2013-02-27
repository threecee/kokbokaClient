define( ['jquery', 'backbone', 'models/Model', 'models/ResultCollection', 'text!templates/recipes/listview.html'],
        function( $, Backbone, Model, ResultCollection, listTemplate ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";

            var ResultList = Backbone.View.extend( {
                el: $( "#showRecipe #recipe" ),

                initialize: function() {
                    this.collection = new ResultCollection;
                    _.bindAll(this, "renderList");
                    this.collection.bind( "reset", this.renderList );
                },

                renderList: function() {

                    var compiled_template = _.template( listTemplate ),
                        collection = this.collection,
                        $el = $(this.el);

                  //  mobileSearch.utils.toggleNavigation( true );
                    $el.html( compiled_template( { results: collection.models } ) );

                    setTimeout( function() {
                       $el.listview('refresh');
                    }, 0 );

                }
            } );

            return ResultList;
        });
