import express from "express";
import passport from "passport";
const router = express.Router()

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user
        })
    }
})

router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect(CLIENT_URL);
    });
})

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure"
    })
})

router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

module.exports = router 
