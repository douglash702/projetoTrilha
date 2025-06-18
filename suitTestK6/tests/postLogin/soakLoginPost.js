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
  } else {
    console.log(`Usuário criado com ID: ${createdUser._id}`);
  }

  return { email: payload.email, password: payload.password, userId: createdUser._id || null };
}

export default function (data) {
  const loginPayload = {
    "email": data.email,
    "password": data.password
  };

  const loginRes = baseRestInstance.post(ENDEPOINTS.LOGIN_ENDPOINT, loginPayload); 
  
  baseChecks.checkStatusCode(loginRes, 200, 'POST /login - Status Code');
  baseChecks.checkResponseBody(loginRes, ['authorization'], 'POST /login - Response Body');
  baseChecks.checkResponseTime(loginRes, 800, 'POST /login - Response Time');
  
  sleep(1);
}

export function teardown(data) {
  const userId = data.userId;

  if (!userId) {
    console.error('Erro no Teardown: userId está undefined.');
    return;
  }

  const userDeleteRes = baseRestInstance.delete(`${ENDEPOINTS.USER_ENDPOINT}/${userId}`); 
  
  baseChecks.checkStatusCode(userDeleteRes, 200, `Teardown DELETE /usuarios/${userId} - Status Code`);
}

export { handleSummary };