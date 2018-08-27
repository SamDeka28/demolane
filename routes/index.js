var { route,render } = require("lane-js/use/router")

module.exports.index = (req, res) => {
  route.get(['/', '/index'], { request: req, response: res }, async (err, req, res) => {
    let content = {
      'page-title':"trajectory.io",
      'page-content':"welcome to the first trajectory application",
    }
    var renderable = await render({ "templateName": "index.html","replacable" : content });
    res.end(renderable);
  })
}

module.exports.welcome =(req,res)=>{
  route.get("/welcome", { request : req, response : res}, function(err,req,res){
    res.end("Welcome to LaneJs")
  })
}