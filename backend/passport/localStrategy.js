const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                console.log('username DNE')
                return done(null, false, { message: 'Incorrect credentials.' })
            } else if (!user.validPassword(password)) {
                console.log('Wrong Password')
                return done(null, false, { message: 'Incorrect credentials.' })
            } else {
                console.log("CORRECT LOGIN INFO")
                return done(null, user)
            }
        });
    });
module.exports = strategy