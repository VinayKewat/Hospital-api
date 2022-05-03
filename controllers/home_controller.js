// when u log first page is this 
module.exports.home = function(req,res){
    return res.json(200,{
        message:"Hy Every One Welcome to Hospital API ",
        
    })
}