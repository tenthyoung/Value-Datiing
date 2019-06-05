// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // this is the %20
app.use(express.json());

require('./routing/htmlroutes')(app);
require('./routing/apiroutes')(app);

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
