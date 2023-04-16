const Message=require("../Middleware/ErrorMessages")

function ErrorHandler(Error,res){
    res.status(Message[Error.message].status).json({
        message:Message[Error.message].errorMessage
    })
}
module.exports=ErrorHandler
