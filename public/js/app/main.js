require(["app", "moment", "routers/MobileRouter", "moment-lang", "jquerymobile"], function(app, moment, MobileRouter) {

  Backbone.Relational.store.addModelScope(app.ns);

    // Prevents all anchor click handling
    $.mobile.linkBindingEnabled = false;

    // Disabling this will prevent jQuery Mobile from handling hash changes
    $.mobile.hashListeningEnabled = false;

      $.mobile.linkBindingEnabled = false;
      $.mobile.ajaxEnabled  = false;

    moment.lang("nb");

    // Instantiates a new Mobile Router instance
    new MobileRouter();

  // Initialize route dispatching, and start with index.
  Backbone.history.start({ pushState: false, root: "/" });
});


