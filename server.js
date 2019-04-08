  // server.js
  // SERVER-SIDE JAVASCRIPT


// 
const express = require('express');
const app = express();
app.use(express.static('public'));

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
// app.use adds this funtionality into express
    app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

    // when there is a GET request to the route defined as '/' we will RESPOND with 'Hello World'
// app.get('/', (req, res) => {
//     // console.log(req);
//     console.log(req.url);
//     res.send('Hello World!');
// });

    // when there is a GET request to the route defined as '/' we will RESPOND with index.html
app.get('/', (req, res) => {
    // console.log(req);
    // console.log(req.url);
    res.sendFile('views/index.html', {root: __dirname});
});


// variable hoding sample database information  
    const albums = [
    {
        title: 'Cupid Deluxe',
        artist: 'Blood Orange'
    },
    {
        title: 'M3LL155X - EP',
        artist: 'FKA twigs'
    },
    {
        title: 'Fake History',
        artist: 'letlive.'
    }
    ];


// when there is a GET REQUEST to the route definded as '/api/albums'
// we will RESPOND with json of the variable albums defined above
    //app.get()
    // app.get('route', ()=> {})   
app.get('/api/albums', (req,res)=> {
    res.json(albums);
});

// Express is opening a port on 3000 to handle incoming  REQUESTS
app.listen(process.env.PORT || 3000,  () => 
console.log('Example app listening at http://localhost:3000/')
);