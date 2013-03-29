define( ['jquery', 'utils', "app/views/recipes/showRecipe" , "app/views/recipes/RecipesView" ],
        function( $ , utils, ShowRecipe, ResultList) {
            // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
            //"use strict";
            var services = {};





            services.allrecipes = function() {
                var serviceUrl = 'http://localhost:9000/recipes/getRecipesJSON?callback=?';
                   $.getJSON(serviceUrl, function( response ) {
                            var results = new ResultList();
                                entries = response;
                                results.collection.reset( entries );
                                    utils.changePage( "#recipes", "slide", false, false );
                                    utils.switchTitle( "Alle oppskrifter" );
                    } );
            };
            services.getRecipe = function(id) {
                var serviceUrl = 'http://localhost:9000/recipes/getRecipeJSON?id='+id+'&callback=?';
                   $.getJSON(serviceUrl, function( response ) {
                            var result = new ShowRecipe();
                                   entries = response;
                                   results.collection.reset( entries );
                                    utils.changePage( "#recipe", "slide", false, false );
                                    utils.switchTitle( "Oppskrift" );
                    } );
            };




    services.getRecipes = function (id) {
        $.ajax({
            type: "GET",
            url: "/recipes/getRecipesJSON",
            data: "id=" + id,
            dataType: "xml"

        });

    }


    services.removeUserPreferredIngredient = function (id) {
        $.ajax({
            type: "POST",
            url: "/users/removeIngredient",
            data: "id=" + id,
            dataType: "xml"

        });

    }


    services.addUserPreferredIngredient = function (amount, unit, description, callback) {
        $.ajax({
            type: "POST",
            url: "/users/addIngredient",
            data: "amount=" + amount + "&unit=" + unit + "&description=" + description,
            dataType: "xml"

        }).always(function (data) {
                callback(data.responseText, amount, unit, description);

            });
    }


    services.changeUserPreferredServings = function (amount) {
        $.ajax({
            type: "POST",
            url: "/users/preferredservings",
            data: "amount=" + amount,
            dataType: "xml"
        });
    }


    services.checkShoppingListIngredient = function (id) {
        $.ajax({
            type: "POST",
            url: "/shoppinglists/check",
            data: "id=" + id,
            dataType: "xml"
        });
    }

    services.unCheckShoppingListIngredient = function (id) {
        $.ajax({
            type: "POST",
            url: "/shoppinglists/uncheck",
            data: "id=" + id,
            dataType: "xml"
        });
    }
    services.addOnTheFlyShoppingListIngredient = function (id, description, callback) {
        $.ajax({
            type: "POST",
            url: "/shoppinglists/addOnTheFly",
            data: "id=" + id + "&description=" + description,
            dataType: "xml"

        }).always(function (data) {
                callback(data.responseText, description);

            });
    }


    services.addRecipeAsFavorite = function (id) {
        $.ajax({
            type: "POST",
            url: "/recipes/addFavorite",
            data: "id=" + id,
            dataType: "xml"
        });
    }

    services.removeRecipeAsFavorite = function (id) {
        $.ajax({
            type: "POST",
            url: "/recipes/removeFavorite",
            data: "id=" + id,
            dataType: "xml"
        });
    }

    services.removeRecipeFromMenu = function (menuId, recipeId) {
        $.ajax({
            type: "POST",
            url: "/menus/unplanrecipefrommenu",
            data: "menuId=" + menuId + "&recipeId=" + recipeId,
            dataType: "xml"

        });
    }


    services.addRecipeToMenu = function (recipeId, day) {
        $.ajax({

            type: "POST",
            url: "/menus/planrecipe",
            data: "recipeId=" + recipeId + "&day=" + day,
            dataType: "xml"

        });
    }


    services.removeIngredientFromRecipe = function (id, ingredientId) {
        $.ajax({
            type: "POST",
            url: "/recipes/removeIngredient",
            data: "recipeId=" + id + "&ingredientId=" + ingredientId,
            dataType: "xml"

        });
    }


    services.addIngredientToRecipe = function (id, amount, unit, description, callback) {
        $.ajax({
            type: "POST",
            url: "/recipes/addIngredient",
            data: "id=" + id + "&amount=" + amount + "&unit=" + unit + "&description=" + description,
            dataType: "xml"

        }).always(function (data) {
                callback(data.responseText, amount, unit, description);

            });
    }


    services.addTagToRecipe = function (id, tag) {
        $.ajax({
            type: "POST",
            url: "/recipes/addTag",
            data: "id=" + id + "&tag=" + tag,
            dataType: "xml"

        });
    }

    services.removeTagFromRecipe = function (id, tag) {
        $.ajax({
            type: "POST",
            url: "/recipes/removeTag",
            data: "id=" + id + "&tag=" + tag,
            dataType: "xml"

        });
    }

    services.updateRecipeField = function (recipeId, elementId, elementValue) {
        $.ajax({
            type: "POST",
            url: "/recipes/update" + elementId,
            data: "id=" + recipeId + "&" + elementId + "=" + elementValue,
            dataType: "xml"

        });
    }


            return services;
        } );

