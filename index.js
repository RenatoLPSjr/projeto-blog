const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articleController = require("./articles/ArticlesController");

const Category = require("./categories/Category");
const Article = require("./articles/Article");

//View engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso!");
    }).catch((error)=>{
        console.log(error);
    })

app.use("/",categoriesController);
app.use("/",articleController);

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(8080, () => {
    console.log("O servidor está rodando!");
});