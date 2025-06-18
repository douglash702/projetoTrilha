import { baseRest, BaseChecks, ENDEPOINTS, testConfig } from '../../support/base/baseTest.js';
import { handleSummary } from '../../support/base/report.js';
import { sleep } from 'k6';


export const options = testConfig.options.smoke;

const base_uri = testConfig.environment.hml.url; 
const baseRestInstance = new baseRest(base_uri);
const baseChecks = new BaseChecks();

export default function () {

    const getCartsRes = baseRestInstance.get(ENDEPOINTS.CARTS_ENDPOINT);

    baseChecks.checkStatusCode(getCartsRes, 200, 'GET /carrinhos - Status Code');
    
    console.log('Resposta do GET /carrinhos:', getCartsRes.body);

    sleep(1); 
}

export { handleSummary };

