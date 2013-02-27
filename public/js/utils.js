define( ['jquery' ],
        function( $ ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            //"use strict";
            var utils = {};


            // summary:
            //            A convenience method for accessing $mobile.changePage(), included
            //            in case any other actions are required in the same step.
            // changeTo: String
            //            Absolute or relative URL. In this app references to '#index', '#search' etc.
            // effect: String
            //            One of the supported jQuery mobile transition effects
            // direction: Boolean
            //            Decides the direction the transition will run when showing the page
            // updateHash: Boolean
            //            Decides if the hash in the location bar should be updated

            utils.changePage = function( viewID, effect, direction, updateHash ) {
                $.mobile.changePage( viewID, { transition: effect, reverse:direction, changeHash: updateHash} );
            };


            // summary:
            //            Display a custom notification using the loader extracted from jQuery mobile.
            //            The only reason this is here is for further customization.
            //
            // message: String
            //            The message to display in the notification dialog

            utils.loadPrompt = function( message ) {
                message = (message == undefined) ? "" : message;

                $( "<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>" + message + "</h1></div>" )
                .css( { "display": "block", "opacity": 0.96, "top": $( window ).scrollTop() + 100 } )
                .appendTo( $.mobile.pageContainer )
                .delay( 800 )
                .fadeOut( 400, function() {
                    $( this ).remove();
                } );
                
            };


            // summary:
            //            Adjust the title of the current view
            //
            // title: String
            //            The title to update the view with
            utils.switchTitle = function( title ) {
                $( '.ui-title' ).text( title || "" );
            };


            return utils;
        } );




