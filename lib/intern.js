const employee = require('./employee');

class intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    };
    empSchool(){
        return this.school;
    };
    empPos(){
        return 'intern';
    };
};

module.exports = intern;