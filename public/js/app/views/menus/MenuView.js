define(['app', 'models/Menu', 'text!templates/menus/menu.html', "utils/DateUtil" ],
    function (app, Menu, itemTemplate, DateUtil) {
        // Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
        "use strict";

        var MenuView = Backbone.View.extend({
            template: _.template(itemTemplate),
            el: "#menuShow #menuContent",
            initialize: function () {

                this.listenTo(this, "rendered", this.options.routing);
                this.listenTo(this, "rendered", this.transitionView );

                if (false && app.ns.Menus.Menus.size() > 0) {
                    this.menu = app.ns.Menus.Menus.find(
                        function (themenu) {
                            return themenu.attributes.week == this.id
                        }, this);
                    this.render();
                }
                else {
                    this.menu = new Menu({id: this.id});
                    console.log(this, 'Fetching menu');
                    this.menu.fetch({silent: false});
                }

                this.listenTo(this.menu, 'sync', this.render);

            },
            render: function (attribute) {
                this.$el = $(this.el);

                var recipes = [];
                for(var i = 0;i<7; i++) {
                    recipes[i] = this.menu.getRecipeForDay(i);
                 }
                console.log('rendering menu %o', this.menu.toJSON());

                this.$el.html(this.template({model: this.menu.toJSON(), recipes: recipes, app:app }));
                this.trigger("rendered");
            },

            transitionView: function () {
                console.log(this, 'transitionView');
                        $("#menuShow").trigger("create");
            }

        });

        return MenuView;
    });
