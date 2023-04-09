const validators=require("../Utilities/Validator")
const userModel=require("../Models/Schema/UserSchema")
var generateUniqueId = require("generate-unique-id")

exports.UserRegisterService=async (req,res)=>{
    try {
        const errorMessage=validators.validations(req);
        if(errorMessage.length==0)
        {
            const userId= generateUniqueId({length: 3,useLetters: false});
            const newRequest={userId,...req};
    
            await userModel.create(newRequest);//create data in db
            return {statusCode:200,status: "Success",data: "Data Registered Successfully",};
        }
        else
        {
            return {statusCode:400,status: "Fail",data: message,};
        }
    } catch (error) {
        return {statusCode:400,status: "Fail",data: `User Already Registered with Email ID = ${req.emailId}`,};
    }
}
exports.GetUserService=async(req,res)=>{
    const errorMessage=validators.UserIdValidation(req.userId);
    if(errorMessage.length==0)
    {
        const user= await userModel.find({userId:req.userId},{_id:0,__v:0});//get data from db
        if(user.length>0)
        {
            return {statusCode:200,status: 'Success',data: {user}};
        }
        else
        {
            return {statusCode:404,status: "Fail",data: 'User does not exists',};
        }    
    }
    else
    {
        return {statusCode:400,status: "Fail",data: message,};
    }
}