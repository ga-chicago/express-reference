// LoginController
// ===============
// Controller for handling logins

var express         = require('express'),
    LoginController = express.Router();


LoginController.route('/?')
  // GET /
  // -----
  // Render the login page
  .get(function(req, res, next) {
    res.render('login', {
      // csrfToken: req.csrf()
    });
  })
  // POST /
  // ------
  // Log the user in
  .post(function(req, res, next) {
    //
  })

module.exports = LoginController;
