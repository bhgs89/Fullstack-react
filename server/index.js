// Common JS syntax
// Same as import express from 'express'
const express = require('express');

// import passport and passport-google-oauth20
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// TEST Route code (REST API)
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

// Using passport with the instance of passport-google-oauth20
// 2 options: client id, client secret
// clientID (Public token): we can share this with the public
// clientSecret (Private token): we don't want anyone to see this
// passport.use(new GoogleStrategy());

// For Heroku's specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Invalid Redirect: cannot contain a wildcard (*) error
// http://localhost:5000/auth/google/callback

// https://console.developers.google.com/
