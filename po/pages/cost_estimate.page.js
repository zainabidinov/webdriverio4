class CostEstimate {
  get numberOfInstances() {
    return $('//span[text()="Number of Instances"]/following-sibling::span');
  }
  get machineType() {
    return $('//span[text()="Machine type"]/following-sibling::span');
  }
  get addGPUs() {
    return $('//span[text()="Add GPUs"]/following-sibling::span');
  }
  get gpuModel() {
    return $('//span[text()="GPU Model"]/following-sibling::span');
  }
  get localSSD2x375GB() {
    return $('//span[text()="Local SSD"]/following-sibling::span');
  }
  get committedUseDiscountOptions() {
    return $(
      '//span[text()="Committed use discount options"]/following-sibling::span'
    );
  }
}
module.exports = new CostEstimate();
