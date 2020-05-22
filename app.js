const express = require("express");
const bodyparser = require('body-parser');
var PORT = process.env.PORT || 5000;
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

})
app.get("/initiative.html", function(req, res) {
    res.sendFile(__dirname + "/initiative.html");
});

app.use("/public", express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));

app.listen(PORT, function() {
    console.log("Server is running on port:5000");
})