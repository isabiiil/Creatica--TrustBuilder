// Oauth Passport session setup.

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const keys = require('../config/keys');

//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
// model to ID
passport.serializeUser((user, done) => done(null, user.githubID));
// ID to model
passport.deserializeUser((id, done) => done(null, {id: id}));
// "http://127.0.0.1:3000/auth/github/callback"
passport.use(
    new GitHubStrategy({
            clientID: keys.githubClientID,
            clientSecret: keys.githubClientSecret,
            callbackURL: 'https://creatica.herokuapp.com/auth/github/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            // console.log(accessToken, refreshToken, profile.id)
            done(null, { githubID: profile.id})
        }
        // User.findOrCreate({githubId: profile.id}, (err, user) => done(err, user))
    ));