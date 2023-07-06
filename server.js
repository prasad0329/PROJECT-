const express =require("express")

const app =express()

app.get("/",function(req,res){
    res.send("leave app server running")
})


app.listen("5000",function(){
    console.log("server running on 5000")
})