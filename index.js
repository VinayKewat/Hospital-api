// import module and fixing pacages 
const express = require('express');

// initialize express in app 
const app = express();

// config cookies parser 
const cookieParser = require('cookie-parser');

// making port 
const port = 1000;

// db configuration 
const db = require("./config/mongoose");

// making passport 
const passport = require("passport");

// express session for login 
const session = require("express-session");

// connect mongo user name with password 
const MongoStore = require("connect-mongo")(session);

// passport authentication 
const passportJWT = require("./config/passport-jwt-strategy");
app.use(express.urlencoded());

// setting up session for a user
app.use(
  session({
    name: "HospitalSession",
    secret: "Antyhing",
    saveUninitializedL: true,
    resave: true,
    cookie: {
      maxAge: 60 * 10 * 10 * 10000,
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      function (error) {
        if (error) {
          console.log("error in storing cookies in mongoo");
        } else {
          console.log("successfully stored");
        }
      }
    ),
  })
);


// make passport setup and configuration 
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use("/", require("./routes"));


// port to listen
app.listen(port , function(err){
    if (err){
        console.log(`Error ! Check Server Again !!!! :- ${err}`);
    }

    console.log(`Server is Connecting on port No :- ${port}`);
});