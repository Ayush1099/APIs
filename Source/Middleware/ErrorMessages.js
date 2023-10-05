module.exports={
    NotFound:{
        status:204,
        errorMessage:"User Not Found"
    },
    ValidationError:{
        status:400
    },
    AlreadyExists:{
        status:400,
        errorMessage:"User Already Exists"
    }
}