const employee = require('./employee')

class manager extends employee{
    constructor(name, id, email, phone){
        super(name, id, email);
        this.phone = phone;
    };
    managerPhone(){
        return this.phone;
    };
    managerPos(){
        return 'manager';
    };
};

module.exports = manager;