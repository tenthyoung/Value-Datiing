// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // this is the %20
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

require('./routing/apiroutes')(app);
require('./routing/htmlroutes')(app);

// if the server doesn't get a response from any other of 
// the middleware functions, it'll send this
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
