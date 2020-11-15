const express = require('express');
const path = require('path');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const cool = require('cool-ascii-faces');

const PORT = process.env.PORT || 3000;


// Oauth
const GITHUB_CLIENT_ID = "--insert-github-client-id-here--";
const GITHUB_CLIENT_SECRET = "--insert-github-client-secret-here--";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) =>
        User.findOrCreate({githubId: profile.id}, (err, user) => done(err, user))
));

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // .get('/cool', (req, res) => res.render('pages/index'))
    .get('/', (req, res) => res.send(cool()))
    .get('/test', (req, res) => res.send({hi: 'there'}))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));