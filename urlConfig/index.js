let { welcome, index } = require("../routes")

var urlConfig = {
    "paths": {
        "/" : index,
        "/index" : index,
        "/welcome" : welcome
    }
}

module.exports = urlConfig