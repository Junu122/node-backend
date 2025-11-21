import express from 'express';
import uploadRouter from './routes/upload.router.js';
import cors from "cors";
const app=express();


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.get('/', (req, res) => {
  console.log("API is working fined");
  res.json({
    message: 'Welcome to Node.js Backend API for this project IN and new updates will be posted here',
    version: '1.0.0',
   
  });
});


app.use("/api", uploadRouter);







app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on port 3000");
})