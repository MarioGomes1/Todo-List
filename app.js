const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date");

let newItem =[];
let workItems =[];


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});


app.get("/", function(req, res){
let day = date.getDate();
  res.render("list", {listTitle:day, newItems:newItem})
});

app.post("/", function(req, res){
    let item = req.body.newToDo;

    if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
    }else{
    newItem.push(item);
    res.redirect("/");
    }

});

app.get("/work", function(req,res){

  res.render("list", {listTitle:"Work list", newItems:workItems})
  res.write("test");
  res.end();
});

app.get("/about", function(req,res){
  res.render("about")
});
