'use strict'

const request = require('supertest')
const app = require('../../src/app')

const createUserMock = {
    email: 'pedrinho123456@gatinhos.com',
    cpfCnpj: '526.597.020-71',
    telephoneNumber: '(31)9923-23288'
}

describe('Users route', () => {
    it('Ensure return status 400 if wrong email is provided', async () => {
        const body = { ...createUserMock }
        body.email = 'pedrinho12354554.com'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if wrong CPF is provided', async () => {
        const body = { ...createUserMock }
        body.cpfCnpj = '653.643.111-99'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if wrong CNPJ is provided', async () => {
        const body = { ...createUserMock }
        body.cpfCnpj = '08081343010108'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if invalid telephone number is provided', async () => {
        const body = { ...createUserMock }
        body.telephoneNumber = '213as444'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })
})