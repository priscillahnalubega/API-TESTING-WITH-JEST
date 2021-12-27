const request = require('supertest');
const server = require('../server');

afterAll(done=>{
    done()
})

describe("question endpoints",()=>{
    it("should get all questions",async()=>{
        const res = await request(server)
        .get("/questions")
        .send()
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
        
    });

});