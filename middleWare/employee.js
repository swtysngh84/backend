exports.validation = (req,res,next) => {
   console.log(req)
    // if(token){
    //     jwt.verify(token,jwtConfig.secret,(err, decoded) => {
    //         if(err){
    //             res.statusCode = 400
    //             return res.json({error:err.message})
    //         }else if(decoded.role == roles.TEACHER){
    //             req.decoded = decoded
    //             next();
    //         }else{
    //             res.statusCode = 400
    //             res.json({error:"You do not have access to this route"})
    //         }
    //     })
    // }else{
    //     res.statusCode = 403;
    //     res.json({error:"Token is required"})
    // }
}