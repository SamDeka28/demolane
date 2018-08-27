
var config = require("./configs/config.json")

const Scratch = require("lane-js")

config.app_root = __dirname //set the app_root to the current working directory

const app = Scratch() //create the server

// finally listen to a port and start the server
app.listen(3000, "127.0.0.1", () => console.log("Server is up and running at port 3001"))
