import { baseRest, BaseChecks, ENDEPOINTS, testConfig } from '../../support/base/baseTest.js';
import { handleSummary } from '../../support/base/report.js';
import { sleep } from 'k6';


export const options = testConfig.options.soak;

const base_uri = testConfig.environment.hml.url; 
const baseRestInstance = new baseRest(base_uri);
const baseChecks = new BaseChecks();

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 11); 
    return `usuario_${randomString}@qa.com.br`;
}

export function setup() {
    const payload = {
        "nome": "testeK6",
        "email": generateRandomEmail(),
        "password": "teste",
        "administrador": "true"
    };
    
    const res = baseRestInstance.post(ENDEPOINTS.USER_ENDPOINT, payload);
  
    baseChecks.checkStatusCode(res, 201, 'POST /usuarios - Status Code');
    baseChecks.checkResponseBody(res, ['_id', 'message'], 'POST /usuarios - Response Body');

    const createdUser = JSON.parse(res.body);

    if (!createdUser._id) {
        console.error('Usuário criado, mas ID não retornado:', res.body);
    }

    return { userId: createdUser._id };
}

export default function (data) {
    const userId = data.userId; 
    const getUserRes = baseRestInstance.get(`${ENDEPOINTS.USER_ENDPOINT}/${userId}`);

    baseChecks.checkStatusCode( getUserRes, 200, `Get /usuarios/${userId} - Status Code`);
    baseChecks.checkResponseTime( getUserRes, 6000, `Get /usuarios/${userId} - Response Time`);

    sleep(1);
}

export function teardown(data) {
    const userId = data.userId;
    const res = baseRestInstance.delete(`${ENDEPOINTS.USER_ENDPOINT}/${userId}`);
    
    baseChecks.checkStatusCode(res, 200, `Teardown DELETE /usuarios/${userId} - Status Code`);
}

export { handleSummary };
