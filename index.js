import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


const app=express();

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js Backend API for this project!',
    version: '1.0.0',
   
  });
});

app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on port 3000");
})