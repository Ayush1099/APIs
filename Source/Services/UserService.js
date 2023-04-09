const validators=require("../Utilities/Validator")
var generateUniqueId = require("generate-unique-id")
const repository=require("../DataAccessLayer/UserRepository")

exports.UserRegisterService=async (req)=>{
    const errorMessage=validators.validations(req);
    if(errorMessage.length==0)
    {
        const userId= generateUniqueId({length: 3,useLetters: false});
        const newRequest={userId,...req};  
        const response=await repository.UserRegisterRepository(newRequest);
        return response;
    }
    else
    {
        return {statusCode:400,status: "Fail",data: errorMessage,};
    }
}
exports.GetUserService=async(req)=>{
    const errorMessage=validators.UserIdValidation(req.userId);
    if(errorMessage.length==0)
    {
        const response=await repository.GetUserRespository(req)
        return response;
    }
    else
    {
        return {statusCode:400,status: "Fail",data: errorMessage,};
    }
}