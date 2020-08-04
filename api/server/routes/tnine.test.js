import "@babel/polyfill";
import request from 'supertest';
import app from '../app';

describe('T9 - Check Validations', () => {
    it('should generate t9 prediction', async () => {
        const res = await request(app)
            .post('/tnine')
            .send({
                numbers: '23'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('prediction');
    });
    it('should generate invalid request for NaN', async () => {
        const res = await request(app)
            .post('/tnine')
            .send({
                numbers: 'a23'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Invalid request.');
    });
    // Note the input accept only string!
    it('should generate invalid request for number type', async () => {
        const res = await request(app)
            .post('/tnine')
            .send({
                numbers: 12
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Invalid request.');
    });
    it('should generate invalid request for missing value', async () => {
        const res = await request(app)
            .post('/tnine')
            .send({
                numbers: ''
            });
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Invalid request.');
    });
    it('should generate invalid request for missing body', async () => {
        const res = await request(app)
            .post('/tnine')
            .send({});
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Invalid request.');
    });
    it('should generate invalid request for missing body', async () => {
        const res = await request(app)
            .post('/tnine')
            .send();
        expect(res.statusCode).toEqual(400);
        expect(res.text).toEqual('Invalid request.');
    });
})