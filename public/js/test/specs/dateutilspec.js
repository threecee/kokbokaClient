// --------------------------
define(["app", "utils/DateUtil", "moment", "moment-lang", "jasminejquery"],

    function (app, DateUtil) {

        describe("DateUtil", function () {
            var timerCallback;
            beforeEach(function () {
                moment.lang("nb");

                this.date = new Date(1979, 5, 24, 11, 33, 0);
                timerCallback = jasmine.createSpy('timerCallback');
                jasmine.Clock.useMock();
                //  this.model = new Menu($.parseJSON(menuData));
            });
            it("should return a pretty printed date", function () {
                this.prettyDate = app.ns.utils.DateUtil.prettyDate(this.date);
                expect(this.prettyDate).toBe("24.06.1979");
            });


            //dayOfMonth
            it("should return the day of month", function () {
                this.dayOfMonth = app.ns.utils.DateUtil.dayOfMonth(this.date);
                expect(this.dayOfMonth).toBe(24);
            });

            //dayOfWeek
            it("should return the day of week", function () {
                this.dayOfWeek = app.ns.utils.DateUtil.dayOfWeek(this.date);
                expect(this.dayOfWeek).toBe(6);

                this.date2 = new Date(1979, 5, 25, 11, 33, 0);
                this.dayOfWeek2 = app.ns.utils.DateUtil.dayOfWeek(this.date2);
                expect(this.dayOfWeek2).toBe(0);

                this.date3 = new Date(1979, 5, 26, 11, 33, 0);
                this.dayOfWeek3 = app.ns.utils.DateUtil.dayOfWeek(this.date3);
                expect(this.dayOfWeek3).toBe(1);

                this.date4 = new Date(1979, 5, 27, 11, 33, 0);
                this.dayOfWeek4 = app.ns.utils.DateUtil.dayOfWeek(this.date4);
                expect(this.dayOfWeek4).toBe(2);

                this.date5 = new Date(1979, 5, 28, 11, 33, 0);
                this.dayOfWeek5 = app.ns.utils.DateUtil.dayOfWeek(this.date5);
                expect(this.dayOfWeek5).toBe(3);

                this.date6 = new Date(1979, 5, 29, 11, 33, 0);
                this.dayOfWeek6 = app.ns.utils.DateUtil.dayOfWeek(this.date6);
                expect(this.dayOfWeek6).toBe(4);

                this.date7 = new Date(1979, 5, 30, 11, 33, 0);
                this.dayOfWeek7 = app.ns.utils.DateUtil.dayOfWeek(this.date7);
                expect(this.dayOfWeek7).toBe(5);
            });

            //dayOfWeek
            it("should return the day of week name", function () {
                this.dayOfWeekName = app.ns.utils.DateUtil.dayOfWeekName(this.date);
                expect(this.dayOfWeekName).toBe("Søndag");


            });


            //weekOfYear
            it("should return the week of year", function () {
                this.weekOfYear = app.ns.utils.DateUtil.weekOfYear(this.date);
                expect(this.weekOfYear).toBe(25);
            });

            // monthOfYear
            it("should return the month of year", function () {
                this.monthOfYear = app.ns.utils.DateUtil.monthOfYear(this.date);
                expect(this.monthOfYear).toBe(5);
            });

            // monthOfYearShort
            it("should return the month of year with shortname", function () {
                this.monthOfYearShort = app.ns.utils.DateUtil.monthOfYearShort(this.date);
                expect(this.monthOfYearShort).toBe("jun");
            });

            // addOneDay
            it("should add one day to date", function () {
                this.addOneDay = app.ns.utils.DateUtil.addOneDay(this.date);
                expect(this.addOneDay.dayOfYear()).toBe((moment(this.date).dayOfYear() + 1));
            });

            // addDays
            it("should add days to date", function () {
                this.addOneDay = app.ns.utils.DateUtil.addDays(this.date, 3);
                expect(this.addOneDay.dayOfYear()).toBe((moment(this.date).dayOfYear() + 3));
            });


            // distance
            it("should calculate days between dates", function () {
                this.dateTo = new Date(1979, 5, 29, 11, 33, 0);
                this.distance = app.ns.utils.DateUtil.distance(this.date, this.dateTo);
                expect(this.distance).toBe(5);
            });


            // getStartingDayThisWeek
            it("should return starting day this week", function () {
                this.getStartingDayThisWeek = app.ns.utils.DateUtil.getStartingDayThisWeek(this.date);
                expect(this.getStartingDayThisWeek.date()).toBe(18);
            });


            // getStartingDayForWeek
            it("should return starting day for week", function () {
                this.getStartingDayForWeek = app.ns.utils.DateUtil.getStartingDayForWeek(2001, 2);
                expect(this.getStartingDayForWeek.dayOfYear()).toBe(8);
            });


        });


    });