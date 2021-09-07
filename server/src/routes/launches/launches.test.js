//Context of writing API TEST
const request = require('supertest');
const app = require('../../app');
//TEST fixure using Describe Function
describe('Test GET /launches',()=>{
    test('It should respond with 200 success',async()=>{
        const response = await request(app)
        .get('/launches')
        //assertion
        .expect('Content-Type',/json/)
        .expect(200) ;
        
        /* expect(response.statusCode).toBe(200); */
    })
})

describe('Test POST /launches',()=>{
    const completeLaunchData ={
        mission:'Akshay Exoplanet',
        rocket: 'AK 1609-D',
        target:'Kepler-186 f',
        launchDate:'January 4,2028',        
    }
    const LaunchDataWithoutDate ={
        mission:'Akshay Exoplanet',
        rocket: 'AK 1609-D',
        target:'Kepler-186 f',      
    }
    test('It should respond with 201 created',async()=>{
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type',/json/)
        .expect(201);
        const requestDate =new Date(completeLaunchData.launchDate).valueOf;
        const responseDate = new Date(response.body.launchDate).valueOf;

        expect(responseDate).toBe(requestDate);
        expect(response.body).toMatchObject(LaunchDataWithoutDate)

    });
    test('It should catch mission required Properties',()=>{});
    test('It should catch catch invalid dates',()=>{})
});