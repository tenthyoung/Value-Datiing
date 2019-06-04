// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Potential matches
// =============================================================
var potentialMatch = [
  {
    routeName: "britney",
    name: "Britney Smith",
    job: "Barista",
    age: 24,
    gender: "female",
    interestedIn: "male"
  },
  
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all potentialMatch
app.get("/api/potentialMatch", function(req, res) {
  return res.json(potentialMatch);
});

// Displays a single character, or returns false
app.get("/api/potentialMatch/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < potentialMatch.length; i++) {
    if (chosen === potentialMatch[i].routeName) {
      return res.json(potentialMatch[i]);
    }
  }

  return res.json(false);
});

// Create New potentialMatch - takes in JSON input
app.post("/api/potentialMatch", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  potentialMatch.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
