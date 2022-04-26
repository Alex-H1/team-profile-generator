// const manager = require('./lib/manager')

describe('manager class',()=>{
    describe('initializing',()=>{
        it('should create a new card name and id',()=>{
            const manager = new manager('karen',911)

            expect(manager.name).toEqual('karen');
            expect(manager.id).toEqual(911);
        })
    })
})