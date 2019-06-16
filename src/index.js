const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("views"));

app.get( "/", ( req, res ) => {
   res.send("Hello!");
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
