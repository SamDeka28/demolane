let { welcome } = require("../routes")

var urlConfig = {
    "paths": {
        "/welcome" : welcome
    }
}

module.exports = urlConfig