class employee{
    constructor(id,name,email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    empName(){
        return this.name;
    };
    empId(){
        return this.id;
    };
    empPos(){
        return 'employee';
    };
};

module.exports = employee;