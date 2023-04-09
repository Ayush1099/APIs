const userModel=require("../Models/Schema/UserSchema")

exports.UserRegisterRepository=async(req)=>{
    try {
        await userModel.create(req);//create data in db
        return {statusCode:200,status: "Success",data: "Data Registered Successfully",};
    } catch (error) {
        return {statusCode:400,status: "Fail",data: `User Already Registered with Email ID = ${req.emailId}`,};
    }
}
exports.GetUserRespository=async(req)=>{
    const user= await userModel.find({userId:req.userId},{_id:0,__v:0});//get data from db
    if(user.length>0)
    {
        return {statusCode:200,status: 'Success',data: user};
    }
    else
    {
        return {statusCode:404,status: "Fail",data: 'User does not exists',};
    }
}