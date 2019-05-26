const test = require('tape');
const supertest = require('supertest');
const router = require('../router');

test('tape is working', (t) => {
    const number = 1;
    t.equal(number, 1, "Number should equal 1");
    t.end();
})

test('Router returns index.html', (t) => {
    supertest(router)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

test('Router returns style.css', (t) => {
    supertest(router)
    .get('/public/style.css')
    .expect('Content-Type', /css/)
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

test('Router returns dom.js', (t) => {
    supertest(router)
    .get('/public/dom.js')
    .expect('Content-Type', /javascript/)
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

test('Router returns error.html', (t) => {
    supertest(router)
    .get('/elephants')
    .expect('Content-Type', /html/)
    .expect(404)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

test('Router returns goodreads book data', (t) => {
    supertest(router)
    .get('/goodreads?=number')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

test('Router returns goodreads username', (t) => {
    supertest(router)
    .get('/goodreadsUser')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
        t.error(err);
        t.end();
    })
})

