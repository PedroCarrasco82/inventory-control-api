'use strict'

const request = require('supertest')
const app = require('../../src/app')

const createUserMock = {
    email: 'pedrinho123456@gatinhos.com',
    cpfCnpj: '526.597.020-71',
    telephoneNumber: '(31)91923-2328',
    companyCEP: '59070-410',
    userCEP: '59122-042',
    password: 'p3dr1nh0m1lgr4u',
    birthdayDate: '2001-01-12'
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
        body.telephoneNumber = '(01)91923-2328'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if invalid companyCEP is provided', async () => {
        const body = { ...createUserMock }
        body.companyCEP = '7329405754984378743'
        const response = await request(app).post('/users/signup').send(body)

        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if invalid userCEP is provided', async () => {
        const body = { ...createUserMock }
        body.userCEP = '654456456576547'
        const response = await request(app).post('/users/signup').send(body)
        
        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if invalid password is provided', async () => {
        const body = { ...createUserMock }
        body.password = '123'
        const response = await request(app).post('/users/signup').send(body)
        
        expect(response.status).toBe(400)
    })

    it('Ensure return status 400 if invalid birthday date is provided', async () => {
        const body = { ...createUserMock }
        body.birthdayDate = '20013-01-12'
        const response = await request(app).post('/users/signup').send(body)
        
        expect(response.status).toBe(400)
    })
})