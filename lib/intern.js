const employee = requir('./employee');

class intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    };
    intSchool(){
        return this.school;
    };
    intPos(){
        return 'intern';
    };
};

module.exports = intern;