import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

//Create Public folder with CSS 
app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended:true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/music", (req, res) => {
    res.render("music.ejs");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });