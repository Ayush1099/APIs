var emailValidator = require('email-validator');

exports.validations=function(req){
    let error=[];
    if(req.name.trim().length<3)
    {
        error.push({"Name":"Length of Name should be greater then or equal to 3"});
    }
    if(req.phoneNo.toString().length!=10)
    {
        error.push({"Phone Number":"Length of phone number should be equal to 10"});
    }
    if(!emailValidator.validate(req.emailId))
    {
        error.push({"Email ID":"Incorrect Email ID"});
    }
    return error;
}
exports.UserIdValidation=function(userId){
    let error=[];

    if(userId.length!=3)
    {
        error.push({"UserId":"Length of UserId should be equal to 3"});
    }
    return error;
}