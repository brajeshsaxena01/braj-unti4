const express = require("express")
const app = express()
app.set('view engine','ejs');
const details = [
                {book:"GameOfThrones"},
                {book:"HarryPotter"},
                {book:"Wings of Fire"}
]

app.get('/books',(req,res) =>{
    res.send(details)
})

app.get("/books/:name",(req,res)=>{
    // res.sendFile(__dirname+'/book.js')
    console.log(req.params.name)
    res.render('view',{name:req.params.name})
})

app.listen(5000,()=>{
    console.log("port 5000 is running")
});