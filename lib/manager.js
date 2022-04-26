const employee = require('./employee')

class manager extends employee{
    constructor(name, id, email, phone){
        super(name, id, email);
        this.phone = phone;
    };
    empPhone(){
        return this.phone;
    };
    empPos(){
        return 'manager';
    };
};

module.exports = manager;