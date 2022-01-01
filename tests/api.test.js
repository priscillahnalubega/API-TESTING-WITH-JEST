const request = require('supertest');
const server = require('../server');

afterAll(done=>{
    done()
})

//questions 
describe("answer endpoints",()=>{
    it("should get all questions",async()=>{
        const res = await request(server)
        .get("/questions")
        .send()
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
        
    });

});
//answers
describe("question endpoints",()=>{
    it("should get all answers",async()=>{
        const res = await request(server)
        .get("/answers")
        .send()
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("message")
        
    });

});

// a  post question
describe("question endpoints",()=>{
    let data = {
        "id": "1",
        "title": "dummy",
        "category": "dummy",
        "question": "dummy"
    }
    it("should post a question",async()=>{
        const res = await request(server)
            .post('/questions')
            .send(data)
            expect(res.statusCode).toEqual(201)
            expect(res.body).toHaveProperty("message")
            
            
            
    });
});

