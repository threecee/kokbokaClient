
define( ['jquery', 'utils', 'services'],
        function( $, utils, services ) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            "use strict";
           
           $(function(){
            
            window.kokboka = window.kokboka || {
                services: services,
                utils: utils
            }
        });

        } );
