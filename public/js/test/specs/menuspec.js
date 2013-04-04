// Jasmine Unit Testing Suite
// --------------------------
define(["backbone-all", "text!test/data/menu.json", "views/menus/MenuView", "models/Menu",  "models/RecipesInMenu", "jasminejquery"],

    function (Bakcbone, menuData, MenuView, Menu, RecipeInMenu) {

        describe("Menus", function () {
                describe("Menu models", function () {

                    beforeEach(function () {
                        this.model = new Menu($.parseJSON(menuData));
                    });
                    it("should return the recipe for monday when getMenuForDay(0) is called", function(){
                        this.recipe = this.model.getRecipeForDay(0);
                         expect(this.recipe).toBeDefined();
                    });


                });

        });

    });