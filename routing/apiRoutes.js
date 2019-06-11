// Your apiRoutes.js file should contain two routes:
const profiles = require('../app/data/profiles.js');

module.exports = function (app) {
    app.get('/api/profiles', (req,res) => {
        return res.json(profiles);
    });

    // app.post('/api/profiles', (req,res) => {
    app.post('/survey.html', (req,res) => {
        console.log('hi')
        function findMatch(newProfile) {
            console.log(newProfile); 
            return profiles[0];
        }
        let newProfile = req.body;
        let bestMatch = findMatch(newProfile);
        profiles.push(newProfile);
        res.json(bestMatch);
    }


)
}


// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.