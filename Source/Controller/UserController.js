const service=require("../Services/UserService")

exports.RegisterUser=async(req,res)=>{
    const response=await service.UserRegisterService(req.body);
    res.status(response.statusCode).json({
        status:response.status,
        data:response.data
    })
}
exports.GetUser=async(req,res)=>{
    const response= await service.GetUserService(req.params);
    res.status(response.statusCode).json({
        status:response.status,
        data:response.data
    })
}