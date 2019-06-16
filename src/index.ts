import express from "express";
import path from "path";

const app = express();
const port = 8080; // default port to listen
app.use(express.static("views"));
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
   res.send("Hello!");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
