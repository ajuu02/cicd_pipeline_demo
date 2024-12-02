const request = require('supertest');
const fs = require('fs');
const app = require('./app'); // assuming your Express app is exported from app.js

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello CI/CD World!');
    });
});

// describe('POST /data', () => {
//     it('should return 201 Created', async () => {
//         const res = await request(app)
//             .post('/data')
//             .send({
//                 name: 'test',
//                 value: '123'
//             });
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toHaveProperty('id');
//     });
// });