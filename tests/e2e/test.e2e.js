export default {
  'Show Text': browser => {
    browser
      .windowHandles(result => {
        const handle = result.value[0];
        browser.switchWindow(handle);
      })
      .url('http://localhost:1337')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('h1', 1000)
      .pause(1000);
    browser.expect.element('body').to.be.present.before(1000);
    browser.expect.element('h1').to.be.present.before(1000);
    browser.assert.cssClassPresent('button', 'google-image');
    browser.pause(500);
    browser.end();
  }
};
