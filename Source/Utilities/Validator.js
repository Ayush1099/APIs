var emailValidator = require('email-validator');
const validatorMessage=require("../Middleware/ErrorMessages")

exports.validations=function(req){
    validatorMessage.ValidationError.errorMessage=[];
    if(req.name.trim().length<3)
    {
        validatorMessage.ValidationError.errorMessage.push({"Name":"Length of Name should be greater then or equal to 3"});
    }
    if(req.phoneNo.toString().length!=10)
    {
        validatorMessage.ValidationError.errorMessage.push({"Phone Number":"Length of phone number should be equal to 10"});
    }
    if(!emailValidator.validate(req.emailId))
    {
        validatorMessage.ValidationError.errorMessage.push({"Email ID":"Incorrect Email ID"});
    }
    return validatorMessage.ValidationError.errorMessage;
}
exports.UserIdValidation=function(userId){
    validatorMessage.ValidationError.errorMessage=[];

    if(userId.length!=3)
    {
        validatorMessage.ValidationError.errorMessage.push({"UserId":"Length of UserId should be equal to 3"});
    }
    return validatorMessage.ValidationError.errorMessage;
}