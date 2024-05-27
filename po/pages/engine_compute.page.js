const ComputeEngineComponents = require("../components/compute_engine_options.component");
const computeEngineOptions = require("../data/selected_engine_options");
class EnginePage {
  constructor() {
    this.computeEngineOptions = new ComputeEngineComponents();
  }
  async fillInComputeEngineOptions(option) {
    await this.computeEngineOptions.inputNumberOfInstances(
      option.NUMBER_OF_INSTANCES
    );
    await this.computeEngineOptions.chooseMachineTypeOptions(
      option.MACHINE_TYPE_OPTIONS
    );
    await this.computeEngineOptions.addGPUsTurnOn();
    await this.computeEngineOptions.choosegpuModel(option.GPU_MODEL_OPTIONS);
    await this.computeEngineOptions.chooselocalSSD(option.LOCAL_SSD_OPTIONS);
    await this.computeEngineOptions.committedUseDiscountOptions.click();
    await browser.pause(1000);
  }
  async openEstimateSummary() {
    await this.computeEngineOptions.shareButton.click();
    await this.computeEngineOptions.openEstimateSummary();
    await browser.switchWindow("Google Cloud Estimate Summary");
  }
}
module.exports = new EnginePage();
