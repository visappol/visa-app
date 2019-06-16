const express = require("express");
const query = require("./query");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("views"));
app.use(express.urlencoded());

app.post("/api/query/submit", async (req, res) => {
    await query.insert(req.body.name, req.body.email, req.body.query);
    res.status(201).send("Thank you for your query");
});

app.get("/api/query/get", async (req, res) => {
    var result = await query.select();
    res.status(200).json(result);
});

app.delete("/api/query/delete", async (req, res) => {
    var result = await query.delete(req.params.id);
    res.status(200).json(result);
});

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
