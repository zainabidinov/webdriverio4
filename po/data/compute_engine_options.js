const COMPUTE_ENGINE_OPTIONS = {
  VALUE_FOR_SEARCH_FIELD: {
    Google_Cloud_Platform_Pricing_Calculator:
      "Google Cloud Platform Pricing Calculator",
  },
  NUMBER_OF_INSTANCES: {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
  },
  MACHINE_TYPE_OPTIONS: {
    g1_small: "g1-small",
    n1_standard_1: "n1-standard-1",
    n1_standard_2: "n1-standard-2",
    n1_standard_4: "n1-standard-4",
    n1_standard_8: "n1-standard-8",
    n1_standard_32: "n1-standard-32",
    n1_standard_64: "n1-standard-64",
    n1_standard_96: "n1-standard-96",
    n1_highmem_2: "n1-highmem-2",
  },
  Final_MACHINE_TYPE_OPTIONS: {
    n1_standard_8: "n1-standard-8, vCPUs: 8, RAM: 30 GB",
    n1_standard_2: "n1-standard-2, vCPUs: 2, RAM: 7.5 GB",
    n1_standard_4: "n1-standard-4, vCPUs: 4, RAM: 15 GB",
  },
  Add_GPUS: {
    true: "true",
    false: "false",
  },
  GPU_MODEL_OPTIONS: {
    NVIDIA_Tesla_P100: "nvidia-tesla-p100",
    NVIDIA_Tesla_P4: "nvidia-tesla-p4",
    NVIDIA_Tesla_V100: "nvidia-tesla-v100",
    NVIDIA_Tesla_T4: "nvidia-tesla-t4",
  },
  Final_GPU_MODEL_OPTIONS: {
    NVIDIA_Tesla_V100: "NVIDIA V100",
    NVIDIA_Tesla_P100: "NVIDIA TESLA P100",
  },
  LOCAL_SSD_OPTIONS: {
    one_x_375_GB: "1x375 GB",
    two_x_375_GB: "2x375 GB",
    three_x_375_GB: "3x375 GB",
    four_x_375_GB: "4x375 GB",
    five_x_375_GB: "5x375 GB",
    six_x_375_GB: "6x375 GB",
    seven_x_375_GB: "7x375 GB",
  },
  Committed_use_discount_options: {
    none: "none",
    one_year: "1 year",
    three_year: "3 year",
  },
};

module.exports = COMPUTE_ENGINE_OPTIONS;
