const BasePage = require("./base.page");

class CloudLandingPage extends BasePage {
  constructor() {
    super();
  }
  async open() {
    await browser.url("https://cloud.google.com/");
  }
  async fillInSearchFieald(option) {
    await this.open();
    await this.headerComponents.inputSearchValue(option);
  }
}
module.exports = new CloudLandingPage();
