const intern = require('../lib/intern')

describe('intern class',()=>{
    describe('initializing',()=>{
        it('should create a card with name and id',()=>{
            const intern = new intern('steve','387');

            expect(intern.name).toEqual('steve');
            expect(intern.id).toEqual('387');
        })
    })
})