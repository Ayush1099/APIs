const userModel=require("../Models/Schema/UserSchema")

exports.UserRegisterRepository=async(req)=>{
    try {
        await userModel.create(req);//create data in db
        return {statusCode:200,status: "Success",data: "Data Registered Successfully", UserId: req.userId};
    } catch (error) {
        throw new Error("AlreadyExists")
    }
}
exports.GetUserRespository=async(req)=>{
    const user= await userModel.find({userId:req.userId},{_id:0,__v:0});//get data from db
    if(user.length>0)
    {
        return {statusCode:200,status: 'Success',data: user};
    }
    throw new Error("NotFound")
}