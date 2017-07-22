const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found',
                name: 'Todo App v1.0'
            })
        })
        .end(done)
})

//GET /users
it('should return user detail', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                name: 'Tikumporn Wankvar',
                age: 26
            })
        })
        .end(done)
});