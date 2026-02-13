const express = require("express");


const app=express()
app.get("/s",(req,res)=>{
  res.send("agro")
});
app.get("/ch",(req,res)=>{
  res.send("agroconnect")
});



app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
