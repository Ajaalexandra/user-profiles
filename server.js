const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
const session = require('express-session');
const config = require('./config');
const userCtrl = require('./controllers/userCtrl.js')
const profileCtrl = require('./controllers/profileCtrl.js')
const port = 3000;



const app = express();



var corsOptions = {
  origin: 'http://localhost:3000'
};




// use can have app = express().get().use


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true}));

app.use(express.static(__dirname + '/public'))


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles)













app.listen(port, () => {
  console.log(`Icecream: ${port}`)  ////will need to change the value here!!!!
});
