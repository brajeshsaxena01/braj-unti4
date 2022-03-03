// get method with route "" ( also called as home or root route) and return a string called hello

const express =require('express')
const app=express()

app.get("/users",function(req,res){
    // console.log("Hello")
   res.send('hello')
})
app.listen(4001,()=>{
    console.log(`listening on ${4001}`)
});

// get method with route "/books" and return json of 4 books with any content


app.get("/books",function(req,res){
    // console.log("Hello")
    res.send({math:'K C Singha',
        physics:"H C Verma" ,
        the_audicity_of_hope:"Barak Obama" ,
        english:"Nrupul"     
})
})
app.listen(4004,()=>{
    console.log(`listening on ${4004}`)
});