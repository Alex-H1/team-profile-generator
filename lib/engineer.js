const employee = require("./employee");

class engineer extends employee{
    constructor(name, id, email, github){
        super(id, name, email);
        this.github = github;
    };
    empGitHub(){
        return this.github;
    };
    empPos(){
        return 'Engineer';
    };
};

module.exports = engineer;
