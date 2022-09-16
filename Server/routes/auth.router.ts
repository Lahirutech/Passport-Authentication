import express from "express";
import passport from "passport";
const router = express.Router()

const CLIENT_URL = "http://localhost:3000/";

router.get("/google", passport.authenticate("google", { scope: ["profile"] }))
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

module.exports = router 
