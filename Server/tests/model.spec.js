const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const ValidationError = mongoose.Error.ValidationError;

var Employee = require(' D:/Employee/server/')

describe('Testing employee model', () => {
    let sampleEmp;
    beforeEach(() => {
        sampleEmp = {
            first_name: "firstname",
            last_name: 'lastnamee',
            number: '0814569999',
            email: 'lank@gmail.com'
        }
    })
    it('it should throw an error due to missing fields', (done) => {
        let employee = new Employee();
        employee.validate((err) => {
            expect(err.errors.first_name).to.exist;
            // expect(err.errors.last_name).to.exist;
            // expect(err.errors.number).to.exist;
            // expect(err.errors.email).to.exist;
            done();
        }) 

    })
})