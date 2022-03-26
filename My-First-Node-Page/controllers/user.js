var express = require('express')
	, passport = require('passport')
	, session = require('express-session')
	, NaverStrategy = require('passport-naver').Strategy;

module.exports = function (app) {
	var client_id = '************ your app client id ************';
	var client_secret = '************ your app client secret ************';
	var callback_url = '************ your app callback url ************';

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (obj, done) {
		done(null, obj);
	});

	passport.use(new NaverStrategy({
		clientID: "uQ6oSxomEs4S7S_dI3GD",
		clientSecret: "oj39v7kcFv",
		callbackURL: "https://my-first-node-page.tndus77.repl.co/user/naver/callback",
		svcType: 0
	}, function (accessToken, refreshToken, profile, done) {
		process.nextTick(function () {

			user = {
				name: profile.displayName,
				email: profile.emails[0].value,
				username: profile.displayName,
				provider: 'naver',
				naver: profile._json
			};

			console.log(user);
			return done(null, profile);
		});
	}));

	return passport;
}