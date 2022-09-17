import express from "express";
import passport from "passport";
const router = express.Router()

const CLIENT_URL = "http://localhost:3000/";
const PROFILEE_URL = "http://localhost:3000/profile";


router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user
        })
    }
})
router.get("/logout", (req, res) => {
    req.logout({ keepSessionInfo: false }, (err) => {
        console.log(err)
    });
    res.redirect(CLIENT_URL);
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure"
    })
})

router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: PROFILEE_URL,
        failureRedirect: "/login/failed",
    })
);

module.exports = router 
