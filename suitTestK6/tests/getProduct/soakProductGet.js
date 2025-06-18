import { baseRest, BaseChecks, ENDEPOINTS, testConfig } from '../../support/base/baseTest.js';
import { handleSummary } from '../../support/base/report.js';
import { sleep } from 'k6';

export const options = testConfig.options.soak;
const base_uri = testConfig.environment.hml.url; 
const baseRestInstance = new baseRest(base_uri);
const baseChecks = new BaseChecks();


export default function () {

    const listProductsRes = baseRestInstance.get(ENDEPOINTS.PRODUCTS_ENDPOINT);

    baseChecks.checkStatusCode(listProductsRes, 200, 'GET /produtos - Status Code');
    baseChecks.checkResponseTime(listProductsRes, 6000, 'GET /produtos - Response Time');

    sleep(1); 
}


export { handleSummary };