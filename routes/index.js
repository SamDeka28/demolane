var { route, render } = require("lane-js/use/router")

module.exports = (req, res) => {
  route(req, res).get('/', async (err, req, res) => {

    let content = {
      'page-title': "trajectory.io",
      'page-content': "welcome to the first trajectory application",
    }

    var renderable = await render({ "templateName": "index.html", "replacable": content });

    res.end(renderable);
  })
}