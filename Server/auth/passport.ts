const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    },
    function (accessToken: string, refreshToken: string, profile: any, done: any) {
        // console.log(profile)
        done(null, profile.id, { message: "Auth successful", accessToken })
    }));

passport.serializeUser((req:any,user:any, done:any) => {
    console.log("serialize user", user)
    console.log("obj serializeUser authenticated", req.isAuthenticated())

    done(null, user);
});

passport.deserializeUser((req: any, obj: any, callback: any) => {
    // check if the user id is still there or manipulated

    // try {
    //     const user = await UserModel.findById(id)
    //     return done(null, user)
    //   } catch (err) {
    //     return done(err, null)
    //   }
    console.log("obj deserialize", obj)
    console.log("obj authenticated", req.isAuthenticated())

    callback(undefined, obj);
});

//use cookie paser in the server.ts set the http only cookie in the google stratergy
// verify the saved token in each call as done in the lahirutech backend project
// use is autheticated passport method to check if the user is loggid in and pass to the role check