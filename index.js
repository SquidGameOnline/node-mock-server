const express = require("express");

const app = express();

const userApi = require("./routes/user");

const debug = require("debug")("my-app");

app.use("/api/user", userApi);

app.get("/",(req, res) => {
    res.send({
        message: 'Hellos'
    })
});
app.listen(3030, (req,res) => {
    debug("server is running....");
});

