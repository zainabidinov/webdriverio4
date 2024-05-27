const HeaderComponents = require("../components/header.components");

class BasePage {
  constructor() {
    this.headerComponents = new HeaderComponents();
  }
}
module.exports = BasePage;
