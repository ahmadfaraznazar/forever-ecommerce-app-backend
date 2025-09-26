import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

//App Configuration

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares

app.use(express.json());
app.use(cors());

//API Endpoints

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => console.log('Server Started on port:' + port));
