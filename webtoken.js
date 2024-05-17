const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

app.post('/login', (req, res) => {
    const user = {
        uname: "cvr",
        pass: "jpmc"
    }
    jwt.sign({ user }, "secret key", {expiresIn: '50s'}, (err, token) => {
        res.status(200).json({ token });
    })
})

app.listen(3012);

function verifyToken(req, res, next) {
    token = req.headers.authorization.split(' ')[1]
    req.token = token;
    next();
}

app.post('/profile', verifyToken, (req, res) => {
    console.log(req.headers)
    jwt.verify(req.token, "secret key", (err, data) => {
        if (!err)
            res.status(200).json({ "message": "Profile Accessed" });
        else
            res.status(401).json({ "message": "Token mismatch" });
    })

})