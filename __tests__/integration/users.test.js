'use strict'

const request = require('supertest')
const app = require('../../src/app')

const createUserMock = {
    email: 'pedrinho123456@gatinhos.com'
}

describe('Users route', () => {
    it('Ensure return status 400 if wrong email is provided', async () => {
        const body = createUserMock
        body.email = 'pedrinho12354554.com'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })
})