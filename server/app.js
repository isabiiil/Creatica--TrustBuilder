const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('../config/keys')

const cool = require('cool-ascii-faces');

//const passportConfig = , but since we only need to run it, not access it, omit assignment
require('../services/passport')

// dynamic port binding (for heroku || dev)
const PORT = process.env.PORT || 3000;
const days_to_ms = d => d * 24 * 60 * 60 * 1000;

const app = express();

app.use(
    cookieSession({
        maxAge: days_to_ms(30),
        keys: [keys.cookieKey] // is a list because one can use multiple keys (rand select)
    })
);
app.use(passport.initialize());
app.use(passport.session());

// .use(express.static(path.join(__dirname, 'public')))
// .set('views', path.join(__dirname, 'views'))
// .set('view engine', 'ejs')
app.get('/', (req, res) => res.send(cool()))
// .get('/test', (req, res) => res.send({hi: 'there'}))
app.get('/api/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user)
    // res.send(req.session);
})
app.get('/api/logout', (req, res) => {
    req.logout();  // kills cookie ID
    res.send(req.user);  // should be undefined
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

require('../routes/authRoutes')(app);
