const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("view engine", "njk");
nunjucks.configure("src/views", {
    express: app,
    autoescape: true,
    noCache: true
});

app.use(express.static(path.join(__dirname, "/../public")));
app.use(morgan("tiny"));



app.listen (
    process.env.PORTA,
    () => console.log (
        `Executando em http://localhost:${process.env.PORTA}`
    )
);