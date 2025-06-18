import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
    return {
      "/results/loadResult/LoginRelatorioDespikeStress.html": htmlReport(data),
    };
  }
  