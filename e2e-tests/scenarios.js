'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('people Application', function() {

  it('should redirect `index.html` to `index.html/#/dashboard', function() {
    browser.get('index.html');
    var url = browser.getCurrentUrl().then(function(url){
        expect(url.split("#")[1]).toBe('/dashboard');
    }, function(err){});

  });



});

describe('Add/Delete: person ', function() {


  it('should add person to db', function() {
    browser.get('#/detail/new');
    var query = element(by.id('firstname'));
    query.sendKeys('webdriver');
    var query2 = element(by.id('lastname'));
    query2.sendKeys('test');
    var submit = element(by.id('personsubmit'));
    submit.click();
    var url = browser.getCurrentUrl().then(function(url){
        console.log("loca " + url);
        expect(url.split("#")[1]).toBe('/dashboard');
    }, function(err){});


  });


    it('should delete person from db', function() {
      browser.get('#/people');
      var deleteBtn = element(by.id('delete_webdriver_test'));
      deleteBtn.click();
      var myElement = element(by.id('webdriver_test'));
      expect(myElement.isPresent()).toBeFalsy();

    });

});
