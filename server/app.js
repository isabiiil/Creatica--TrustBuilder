const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const passport = require('passport')
const cors = require('cors');

const keys = require('../config/keys')

const cool = require('cool-ascii-faces');

//const passportConfig = , but since we only need to run it, not access it, omit assignment
require('../services/passport')

// dynamic port binding (for heroku || dev)
const PORT = process.env.PORT || 3000;
const days_to_ms = d => d * 24 * 60 * 60 * 1000;

const app = express();

// dummy data: todo: replace w cockroachdb
const data = {
    1: [
        {id: 1, text: "revenue", image:null, amount: 300},
        {id: 2, text: "expense", image:null, amount: 200},
        {id: 3, text: "revenue", image:null, amount: 400}
    ]
}

const whitelist = ["http://localhost:3003/"]
app.use(cors({
    origin: (origin, callback) => {
        // if (whitelist.indexOf(origin) !== -1)
        callback(null, true)
    }
}));

app.use(
    cookieSession({
        maxAge: days_to_ms(30),
        keys: [keys.cookieKey] // is a list because one can use multiple keys (rand select)
    })
);
app.use(passport.initialize());
app.use(passport.session());



// cors approach didn't work
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3003/"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

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

app.get('/api/data', (req, res) => {
    res.send({history: data[1]});
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

require('../routes/authRoutes')(app);
