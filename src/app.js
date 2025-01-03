import express from "express"

const app = express();
app.get("/", (req,res)=>{
    res.send(`<h1>Hello World !!!</h1>`)
} )


app.listen(2000 , ()=>{
    console.log(`=> App is listening On http://localhost:2000`);
    
})