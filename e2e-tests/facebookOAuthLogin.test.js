const { Builder, By, until } = require('selenium-webdriver');

async function facebookOAuthLoginTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/login'); 
    await driver.findElement(By.css('button[onClick="handleSignInWithFacebook"]')).click(); // Adjust selector as needed

    await driver.wait(until.urlContains('facebook.com'), 10000); // Wait up to 10 seconds

    console.log('Facebook OAuth login page reached.');
  } catch (error) {
    console.error('Facebook OAuth login test failed:', error);
  } finally {
    await driver.quit(); 
  }
}

facebookOAuthLoginTest();
