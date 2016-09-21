var http = require('http');
var expect = require('chai').expect;
var app = require('../../app');


before(function() {
    var server = http.createServer(app);
    server.listen(3001);
    browser.baseUrl = 'http://localhost:' + server.address().port;
    browser.ignoreSynchronization = true;
});

describe('Albums CRUD', function() {
    // describe('Given I visit /users', function() {
    //     it('Then I see the express default', function() {
    //         browser.get('/users');
    //         element(by.tagName('body')).getText().then(function(text) {
    //             expect(text).to.equal('respond with a resource');
    //         });
    //     });
    //
    // });
    describe('Root Page Tests', function() {

        describe('When I visit the Albums route page', function() {
            it('Then I see the "OMG Albums!" in  the h1 tag"', function() {
                browser.get('/');
                element(by.tagName('h1')).getText().then(function(text) {
                    expect(text).to.equal('OMG Albums!');
                });
            });

        });

        describe('When I click the Let me see the RIGHT NOW! link', function() {
            it('Then I see the albums page', function() {

                browser.get('/');
                element(by.id('albumlink')).click();


                //var url = browser.getCurrentUrl();

                browser.getCurrentUrl().then(function(url) {
                    console.log("Promise has been resolved and url is", url);
                    expect(url).to.equal("http://localhost:3001/albums");
                });

                console.log("after getcurr");

            });

        });

    });



    describe('When I visit the Albums page', function() {
        it('Then I see the Albums in the h1 tag"', function() {
            browser.get('/albums');
            element(by.tagName('h1')).getText().then(function(text) {
                expect(text).to.equal('Albums');
            });
        });

        it('Then I see the albums in a table', function() {
            browser.get('/albums');


            // Element exists.
            //expect(element(by.tagName('tbody')).isPresent()).toBe(true);



            var myElement = element(by.tagName('tbody'));
            myElement.isPresent().then(function(result) {
                // if (result) {
                //     console.log("is present", result)
                // } else {
                //     console.log("is not present", result)
                // }
                expect(result).to.equal(true);

            });

            //            var logoutButton =  element(by.css('[ng-click="log_out()"]'));

            //            console.log(" myElement is", myElement)
            //expect(myElement.isPresent()).toBeFalsy();


            //expect(element(by.tagName('tbody')).isPresent()).toBe(false);


            //            expect(element(by.tagName('tbody')).isPresent()).to.become(false);
            /*element(by.tagName('tbody')).then(function(text) {
                expect(text).to.equal('Albums');
            });*/
        });


    });



});
