"use strict";
const app = require("express")();
const cors = require('cors');
const consign = require("consign");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
consign()
    .then("start/routes.js")
    .into(app);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
