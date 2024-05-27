const CloudLandingPage = require("../../po/pages/cloud_landing.page.js");
const CloudSearchResultPage = require("../../po/pages/cloud_search_result.page.js");
const CloudPricingCalculatorPage = require("../../po/pages/cloud_pricing_calculator.page.js");
const EngineComputePage = require("../../po/pages/engine_compute.page.js");
const CostEstimatePage = require("../../po/pages/cost_estimate.page.js");
const COMPUTE_ENGINE_OPTIONS = require("../../po/data/compute_engine_options.js");
const {
  SELECTED_ENGINE_OPTIONS,
} = require("../../po/data/selected_engine_options.js");

describe("Google Cloud Platform Pricing Calculator", () => {
  const computeEngineOptions = EngineComputePage.computeEngineOptions;

  before(async () => {
    await CloudLandingPage.fillInSearchFieald(
      COMPUTE_ENGINE_OPTIONS.VALUE_FOR_SEARCH_FIELD
        .Google_Cloud_Platform_Pricing_Calculator
    );
    await CloudSearchResultPage.openfirstSearchResult();
    await CloudPricingCalculatorPage.openComputeEngineCalculator();
    await EngineComputePage.fillInComputeEngineOptions(SELECTED_ENGINE_OPTIONS);
  });

  it("should match the total estimated cost in the header with the final estimated cost '@smoke'", async () => {
    const computeEngineCost = await computeEngineOptions.estimatedCostInHeader;
    const estimatedCost = await computeEngineOptions.finalEstimatedCost;
    const estimatedCostText = await estimatedCost.getText();
    await expect(computeEngineCost).toHaveText(estimatedCostText);
  });
  describe("Total cost result page", function () {
    before(async function () {
      await EngineComputePage.openEstimateSummary();
      await CostEstimatePage.numberOfInstances.waitForDisplayed();
    });
    it("should display the correct number of instances as '4' '@smoke'", async () => {
      const numberOfinstance = await CostEstimatePage.numberOfInstances;
      const fourInstances = COMPUTE_ENGINE_OPTIONS.NUMBER_OF_INSTANCES.four;
      await expect(numberOfinstance).toHaveText(fourInstances);
    });
    it("should display the correct machine type as 'n1-standard-8, vCPUs: 8, RAM: 30 GB'", async () => {
      const machineType = await CostEstimatePage.machineType;
      const machineTypeN1_standart_8 =
        COMPUTE_ENGINE_OPTIONS.Final_MACHINE_TYPE_OPTIONS.n1_standard_8;
      await expect(machineType).toHaveText(machineTypeN1_standart_8);
    });
    it("should display 'true' for the 'Add GPUs' option", async () => {
      const addGPUS = await CostEstimatePage.addGPUs;
      const Add_GPUS = COMPUTE_ENGINE_OPTIONS.Add_GPUS.true;
      await expect(addGPUS).toHaveText(Add_GPUS);
    });
    it("should display the correct GPU type as 'NVIDIA V100'", async () => {
      const gpuModel = await CostEstimatePage.gpuModel;
      const GPU_MODEL_OPTIONS =
        COMPUTE_ENGINE_OPTIONS.Final_GPU_MODEL_OPTIONS.NVIDIA_Tesla_V100;
      await expect(gpuModel).toHaveText(GPU_MODEL_OPTIONS);
    });
    it("should display the correct Local SSD value as '2x375 GB'", async () => {
      const localSSD2x375GB = await CostEstimatePage.localSSD2x375GB;
      const LOCAL_SSD_OPTIONS =
        COMPUTE_ENGINE_OPTIONS.LOCAL_SSD_OPTIONS.two_x_375_GB;
      await expect(localSSD2x375GB).toHaveText(LOCAL_SSD_OPTIONS);
    });
    it("should display the correct committed use discount option as '1 year'", async () => {
      const committedUseDiscountOptions =
        await CostEstimatePage.committedUseDiscountOptions;
      const Committed_use_discount_options =
        COMPUTE_ENGINE_OPTIONS.Committed_use_discount_options.one_year;
      await expect(committedUseDiscountOptions).toHaveText(
        Committed_use_discount_options
      );
    });
  });
});
