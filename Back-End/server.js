import express from "express";
import dotenv from 'dotenv';
import db from './models/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, async () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})