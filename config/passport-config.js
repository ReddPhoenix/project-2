const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var db = require('../models');

passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    function (email, password, done) {
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function (dbuser) {
            if (!dbuser) {
                return done(null, false, {
                    message: 'no account with that email found'
                });
            } else if (!dbuser.validPassword(password)) {
                return done(null, false, {
                    message: 'The password you entered is incorrect'
                });
            }
            return done(null, dbuser);
        });
    }
));


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;