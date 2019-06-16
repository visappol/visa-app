const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // default port to listen
app.use(express.static("views"));
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
   res.send("Hello!");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
