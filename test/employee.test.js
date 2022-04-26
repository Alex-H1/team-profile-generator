const employee = require('../lib/employee')

describe('employee class',()=>{
    describe('initializing',()=>{
        it('should create a new card with name and id',()=>{
            const employee = new employee('alex','234');

            expect(employee.name).toEqual('alex');
            expect(employee.id).toEqual('234');
        })
    })
})