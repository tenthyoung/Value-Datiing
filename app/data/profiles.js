// I need to generate random score data for the demo
// (function generateRandomScoreArr(numQuestions, lowestScore, highestScore) {
//     let randomScoreArray = [];
//     for (let i = 0 ; i < numQuestions ; i++) {
//         randomScoreArray.push(Math.floor(Math.random()*highestScore)+lowestScore)
//     }

//     console.log(randomScoreArray);
//     return randomScoreArray;
// })(10,1,5);


let profiles = 
[
    {
        "name": "Trisha Hermann",
        "photo": "http://images6.fanpop.com/image/photos/37300000/Random-Girl-people-37325426-236-354.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 4, 4, 4, 2, 1, 3, 1, 4, 5, 1 ]
    },
    {
        "name": "Rosalind Goyette",
        "photo": "https://i.pinimg.com/236x/8d/b0/f2/8db0f235b19283ff5ad6d1e103a7f592.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 5, 3, 5, 3, 2, 5, 4, 2, 4, 2 ]
    },
    {
        "name": "Lorena Wyman",
        "photo": "https://i.pinimg.com/474x/a9/97/3e/a9973e183658c7ebf377209254fe8d12.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 3, 5, 1, 5, 3, 4, 4, 2, 5, 5 ]
    },
    {
        "name": "Bella Schaden",
        "photo": "https://data.whicdn.com/images/301335572/large.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 3, 2, 1, 4, 5, 1, 2, 4, 3, 5 ]
    },
    {
        "name": "Giovanna Jacobson",
        "photo": "https://i.pinimg.com/originals/6d/bd/ea/6dbdeacb3b7ad332be657c9ca64f4b54.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 2, 2, 1, 4, 5, 2, 1, 2, 3, 2 ]
    },
    {
        "name": "Martine Berge",
        "photo": "https://data.whicdn.com/images/66636795/large.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 2, 2, 5, 3, 3, 4, 1, 4, 3, 1 ]
    },
    {
        "name": "Ciara Erdman",
        "photo": "https://i.pinimg.com/originals/38/2d/36/382d365414e9178a917112f0762def05.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 5, 4, 2, 4, 2, 4, 3, 1, 3, 2 ]
    },
    {
        "name": "Liliana Kim",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jqSdtJO_eeKbW3VRg7tZdzMrlEpqMWTnQHfFAaNPNg3MHjOSUw",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 1, 5, 4, 4, 4, 1, 2, 3, 1, 4 ]
    },
    {
        "name": "Mylene Pfeffer",
        "photo": "http://s13.favim.com/orig/160217/beautiful-cute-girl-instagram-Favim.com-4011998.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 3, 1, 1, 5, 2, 1, 3, 3, 3, 4 ]
    },
    {
        "name": "Matilda Parisiann",
        "photo": "https://data.whicdn.com/images/56794279/large.jpg",
        "gender": "female",
        "interestedIn": "male",
        "scores": [ 4, 2, 2, 4, 5, 2, 3, 2, 4, 2 ]
    },
    {
        "name": "Taurean Kutch",
        "photo": "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg",
        "gender": "male",
        "interestedIn": "female",
        "scores": [ 4, 3, 1, 1, 1, 5, 5, 3, 1, 3 ]
    },
    {
        "name": "Garett Brown",
        "photo": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
        "gender": "male",
        "interestedIn": "female",
        "scores": [ 1, 5, 5, 4, 5, 2, 5, 4, 1, 4 ]
    },
    {
        "name": "Ricky Stehr MD",
        "photo": "https://s3.amazonaws.com/uifaces/faces/twitter/xadhix/128.jpg",
        "gender": "male",
        "interestedIn": "female",
        "scores": [ 3, 5, 1, 4, 2, 1, 3, 3, 1, 5 ]
    },
    {
        "name": "Jabba the Hut",
        "photo": "https://starwarsblog.starwars.com/wp-content/uploads/2018/06/jabba-sideshow-tall.jpg",
        "gender": "male",
        "interestedIn": "female",
        "scores": [ 4, 3, 2, 5, 5, 2, 2, 3, 5, 2 ]
    },
]

module.exports = profiles;