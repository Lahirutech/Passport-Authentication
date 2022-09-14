const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');
const request = require('supertest');
const sandbox = sinon.createSandbox()
let app = require('D:/Employee/server/server.ts')
const employeeController = require("../controllers/employee-controller")

describe('Testing express routers', () => {
    afterEach(() => {
        app = rewire('../server');
        sandbox.restore();
    });

    describe('Testing item', () => {
        let sampleEmp

        beforeEach(() => {
            sampleEmp = {
                first_name: "firstname",
                last_name: 'lastnamee',
                number: '0814569999',
                email: 'lank@gmail.com'
            }
            sandbox.stub(employeeController, 'findEmployee').resolves(sampleEmp)
        })

        it('Should successfully return a item',(done)=>{
            request(app).get(`/get`)
            .expect(200)
            .end((err,response)=>{
                expect(response.body).to.have.property('user').to.have.property('first_name').to.equal('firstname')
            })
        })
    })

})