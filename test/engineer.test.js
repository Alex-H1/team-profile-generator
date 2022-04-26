// const engineer = require('../lib/engineer')

describe('engineer class',()=>{
    describe('initializing',()=>{
        it('should create a new card name and id',()=>{
            const engineer = new engineer('bob','763');

            expect(engineer.name).toEqual('bob');
            expect(engineer.id).toEqual('763');
        })
    })
})