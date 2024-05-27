class EstimateComponents {
  get computeEngine() {
    return $("h2=Compute Engine");
  }
  async computeEngineMenu() {
    await this.computeEngine.waitForDisplayed();
    await this.computeEngine.click();
  }
}
module.exports = EstimateComponents;
