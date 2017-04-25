/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This function runs before any of the tests run.
     * It is used here to fire the tests for asynchronous function
     * loadFeed when it finishes its execution.
    */
    var previousLoadedTitle;
    beforeEach(function(done) {
        loadFeed(0, function() {
            previousLoadedTitle = $('.header-title').text();
            done();
        });
    });


    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have urls and they are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have names and they are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
         });
    });


    /* This test suite concerns the sliding menu */
    describe('The menu', function() {
        var body = $('body');

        /* This test ensures the menu element is
         * hidden by default.
        */
        it('is hidden', function() {
        expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when menu icon is clicked', function() {
            var menuIcon = $(".menu-icon-link");

            // Trigger the click event on the menu-icon-link
            menuIcon.trigger("click");

            // Check if body has class menu-hidden or not
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.trigger("click");

            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This test suite concerns the initial entries loaded */
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * loadFeed() is asynchronous so this test requires
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        it('.feed contains atleast one .entry element', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* This suite concerns the loading of new feeds */
    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('changes the content on the page', function(done) {
            var currentLoadedTitle;
            loadFeed(1, function() {
                currentLoadedTitle = $('.header-title').text();
            });
            expect(currentLoadedTitle).not.toBe(previousLoadedTitle);
            done();
        });
    });
}());
