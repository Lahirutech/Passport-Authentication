const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (profile: any, done: any) {
        done(null, profile);
    }
));


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});