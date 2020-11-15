const passport = require('passport');

// GET /auth/github
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in GitHub authentication will involve redirecting
//   the user to github.com.  After authorization, GitHub will redirect the user
//   back to this application at /auth/github/callback


module.exports = app => {
    app.get('/auth/github', passport.authenticate('github', {scope: ['user:email']}))
    // this time, instead of entering oauth flow, route to profile with key
    app.get('/auth/github/callback', passport.authenticate('github'))
}