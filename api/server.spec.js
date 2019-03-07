const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    
    describe('GET /', () => {
        it('should return 200 OK using the squad', async () => { 
            const res = await request(server).get('/');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');

            expect(res.type).toBe('application/json');
        });

        it('should return { api : "up" }', async () => {
            const res = await request(server).get('/');

            expect(res.body).toEqual({api : "up"});
        });
    });

    describe('CREATE /books', () => {

        //is attempting to post an empty field so should fail
        it('should error without body', async () => {
            const res = await request(server).post('/books');

            expect(res.status).toBe(500);
        });

        it('responds with json', () => {
            return request(server)
              .post('/books')
              .send({title: 'Small Favor'})
              .set('Accept', 'application/json')
              .expect(200)
        });
    });

    describe('DELETE /books', () => {

        it('should error -404- without book id', async () => {
            const res = await request(server).delete('/:id');

            expect(res.status).toBe(404);
        });

        it('should return a 200 ok', async () => {
            const bookId = 2;

            const res = await request(server).delete(`/${bookId}`);
            
            expect(res.status).toBe(200);
        })
    });

});