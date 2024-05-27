class ComputeEngineOptions {
  get setNumberOfInstances() {
    return $('//div[text()="Number of Instances"]/parent::*/parent::*//input');
  }
  get machineType() {
    return $(
      '//span[text()="Machine type"]/ancestor::div[contains(@role, "combobox")]'
    );
  }
  getmachineTypeOptions(option) {
    return $(`li[data-value="${option}"]`);
  }
  get addGPUs() {
    return $('button[aria-label="Add GPUs"]');
  }
  get gpuModel() {
    return $(
      '//span[text()="GPU Model"]/ancestor::div[contains(@role, "combobox")]'
    );
  }
  getgpuModelOption(option) {
    return $(`li[data-value="${option}"]`);
  }
  get localSSD() {
    return $(
      '//span[text()="Local SSD"]/ancestor::div[contains(@role, "combobox")]'
    );
  }
  getlocalSSD(option) {
    return $(
      `//span[text()="${option}"]/ancestor::li[contains(@role, "option")]`
    );
  }
  get committedUseDiscountOptions() {
    return $('label[for="1-year"]');
  }
  get estimatedCostInHeader() {
    return $('//span[text()="/ month"]/preceding-sibling::span');
  }
  get finalEstimatedCost() {
    return $('//div[text()="Estimated cost"]/parent::*//label');
  }
  get shareButton() {
    return $('button[aria-label="Open Share Estimate dialog"]');
  }
  get estimateSummary() {
    return $('a[track-name="open estimate summary"]');
  }
  async chooseMachineTypeOptions(option) {
    await this.machineType.click();
    const machineTypeOptions = this.getmachineTypeOptions(option);
    await machineTypeOptions.waitForDisplayed();
    await machineTypeOptions.click();
  }
  async addGPUsTurnOn() {
    await this.addGPUs.click();
    await this.gpuModel.waitForDisplayed();
  }
  async choosegpuModel(option) {
    await this.gpuModel.click();
    const gpuModelOptions = this.getgpuModelOption(option);
    await gpuModelOptions.waitForDisplayed();
    await gpuModelOptions.click();
  }
  async chooselocalSSD(option) {
    await this.localSSD.click();
    const getlocalSSD = this.getlocalSSD(option);
    await getlocalSSD.waitForDisplayed();
    await getlocalSSD.click();
  }
  async inputNumberOfInstances(number) {
    await this.setNumberOfInstances.waitForDisplayed();
    await this.setNumberOfInstances.setValue(number);
  }
  async openEstimateSummary() {
    await this.estimateSummary.waitForDisplayed();
    await this.estimateSummary.click();
  }
}
module.exports = ComputeEngineOptions;
