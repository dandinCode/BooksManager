const express = require("express");
const exphbs = require("express-handlebars")

const app = express();

const conn = require("./db/conn")
const Books = require("./Models/Books")
const routes = require("./Routes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json())

app.use("/book", routes)

conn.sync().then(()=>{
    app.listen(5000, () => {
        console.log("Running in: http://localhost:5000/book/register")
    })
}).catch((error)=>{
    console.log(error);
})