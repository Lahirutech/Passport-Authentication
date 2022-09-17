require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cookieSession = require("cookie-session");

const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const employeeRoutes = require("./routes/employee-router")
const authRoutes = require("./routes/auth.router")


const passport = require("passport");


require("./auth/passport")

const mongooseServer = require("mongoose")
const port = process.env.PORT || 5001;


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
app.use(cookieSession({
    httpOnly: false,
    name: "session",
    keys: [process.env.COOKIE_SECRT],
    maxAge: 24 * 60 * 60 * 100

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json());

app.use("/api/employee", employeeRoutes)
app.use("/auth", authRoutes)

mongooseServer
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("db Connected"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
