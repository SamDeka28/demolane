var { route } = require("lane-js/use/router")

module.exports.welcome =(req,res)=>{
  route.get("/welcome", { request : req, response : res}, function(err,req,res){
      res.end("Welcome to LaneJs")
  })
}