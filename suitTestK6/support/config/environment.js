export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    
    options: {
       
        smoke: {
            vus: 1,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<6000'],
                http_req_failed: ['rate<0.08']
            }
        },

        
        loadTest: {
            stages: [
                { duration: '30s', target: 10 },
                { duration: '30s', target: 20 },
                { duration: '1m', target: 20 },
                { duration: '30s', target: 0 }
            ]
        },

       
        soak: {
            vus: 10,
            duration: '10m',
            thresholds: {
                http_req_duration: ['p(95)<6000'],
                http_req_failed: ['rate<0.08']
            }
        },

       
        spikeStress: {
            vus: 50,
            thresholds: {
                http_req_duration: ['p(95)<6000'],
                http_req_failed: ['rate<0.08']
            },
            stages: [
                { duration: '10s', target: 50 }, // Subida até 50 VUs
                { duration: '20s', target: 0 }   // Descida até 0 VUs
            ]
        }
    }
};
