define(["app"],
    function (app) {
        "use strict";
        app.ns.utils.DayMapper = {};
        app.ns.utils.DayMapper.FromIndex = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
        app.ns.utils.DayMapper.ToIndex = Object.freeze({"Mandag":0, "Tirsdag":1, "Onsdag":2, "Torsdag":3, "Fredag":4, "Lørdag":5, "Søndag":6});
        return app.ns.utils.DayMapper;
    });
