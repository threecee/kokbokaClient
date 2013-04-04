define(["app", "moment", "utils/DayMapper"], function (app, moment) {

    app.ns.utils.DateUtilClass = function () {


        var dateFormatDots = "DD.MM.YYYY";
        var dateFormatDash = "yyyy-MM-dd";
        var NO = "no";

        this.prettyDate = function (date) {
            var momentDate = moment(date);
            return momentDate.format(dateFormatDots);
        }


        this.dayOfMonth = function (date) {
            var momentDate = moment(date);
            return momentDate.date();
        }

        this.dayOfWeek = function (date) {
            var momentDate = moment(date);
            if (moment.lang() == "nb") {
                return (momentDate.day() + 7 - 1 ) % 7;
            }
            else {
                return momentDate.day();
            }
        }

        this.dayOfWeekName = function (date) {
            var day  = this.dayOfWeek(date);
            return app.ns.utils.DayMapper.FromIndex[day];
        }

        this.weekOfYear = function (date) {
            var momentDate = moment(date);
            return momentDate.week();
        }

        this.monthOfYear = function (date) {
            var momentDate = moment(date);
            return momentDate.month();
        }

        this.monthOfYearShort = function (date) {
            var momentDate = moment(date);
            return momentDate.format("MMM");
        }

        this.addOneDay = function (date) {
            var momentDate = moment(date);
            return momentDate.add('days', 1);
        }

        this.addDays = function (date, days) {
            var momentDate = moment(date);
            return momentDate.add('days', days);
        }

        this.distance = function (from, to) {
            var momentFrom = moment(from);
            var momentTo = moment(to);
            return momentTo.diff(momentFrom, "days");
        }

        this.getStartingDayThisWeek = function (date) {
            var momentDate = moment(date);
            if (moment.lang() == "nb") {
                if (momentDate.day() == 0) {
                    momentDate.subtract('days', 1);
                }
            }
            momentDate.day(1);
            return momentDate;
        }

        this.getStartingDayForWeek = function (year, week) {
            var momentDate = moment();
            momentDate.year(year);
            momentDate.week(week);
            return this.getStartingDayThisWeek(momentDate);
        }


    }

    app.ns.utils.DateUtil = new app.ns.utils.DateUtilClass();
    return app.ns.utils.DateUtil;

})
;

