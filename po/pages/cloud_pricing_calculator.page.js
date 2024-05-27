const EstimateComponents = require("../components/estimate-components.component.js");
class CloudPricingCalculatorPage {
  constructor() {
    this.estimateComponents = new EstimateComponents();
  }
  get addToEstimateButton() {
    return $(".UywwFc-vQzf8d");
  }
  async clickOnAddToEstimateButton() {
    await this.addToEstimateButton.waitForDisplayed();
    await this.addToEstimateButton.click();
  }
  async openComputeEngineCalculator() {
    await this.clickOnAddToEstimateButton();
    await this.estimateComponents.computeEngineMenu();
  }
}
module.exports = new CloudPricingCalculatorPage();
