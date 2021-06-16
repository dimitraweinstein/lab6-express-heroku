const app = require('../index.js')
const supertest = require('supertest');
const owls = require('../data.js');
const request = supertest(app);

it('owls responds with all the owls', async() => {
    const response = await request.get('/owls');

    expect(response.status).toBe(200)
    expect(response.body).toEqual(owls)
});

// it('owls/id responds with a single owl by id', async() => {
//     const response = await request.get('/owls/5');

//     expect(response.status).toBe(200)
//     expect(response.body).toEqual(owls)
// });