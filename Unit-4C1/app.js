const express=require("express")
const app=express()

const data=[
    {"Book":"Wings of fire"},
    {"Book":"The audocity of hope"}
]
app.use(logger)

app.get('/books',(req,res)=>{
    res.send(data)
})

app.use(checkPermision)

app.get('/libraries',(req,res)=>{
if(req.path=='libraries'){
    res.send({"permission":true})
}
})
app.get('authors',(req,res)=>{
    
})
function logger(req,res,next){
    next()
}
function checkPermision(req,res,next){
    next()
}
app.listen(5000,()=>{
    console.log("port 5000 is running")
})