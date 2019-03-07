const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    
    describe('GET /', () => {
        it.skip('should return 200 OK using the squad', async () => { 
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        });

        it.skip('should return JSON', async () => {
            const res = await request(server).get('/');

            expect(res.type).toBe('application/json');
        });

        it.skip('should return { api : "up" }', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({api : "up"});
        });
    });



});