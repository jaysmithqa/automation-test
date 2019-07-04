const assert = require('assert')
module.exports = function () {
    this.When(/^I visited "([^"]*)"$/, function (url) {
      helpers.loadPage(url).then(() => {});
    });
    this.Then(/^I input "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         driver.findElement(By.className("gLFyf")).sendKeys(arg1);
         driver.manage().setTimeouts( { implicit: 2000 } );
         driver.findElement(By.className("gNO89b")).then(console.log("get button"));
         callback();
       });
    this.Then(/^I click button "([^"]*)"$/, function(button, callback) {
      driver.findElements(By.className("gNO89b")).then(function(elements) {
        elements[0].click();
        console.log("success 2");
        driver.manage().setTimeouts( { implicit: 3000 } );  
        callback();
        });
      });
    this.Then(/^I will see "([^"]*)"$/, function (text, callback) {
        driver.findElements(By.className("LC20lb")).then(function(elements) {
          elements[0].click();
          console.log("done");
          callback();
        });
   });
};
