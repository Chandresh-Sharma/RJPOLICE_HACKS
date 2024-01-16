import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js'

const app = express();

app.use('/auth', authRoutes);

app.use(bodyParser.json({ limit: "3mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "3mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb://rajpolice_hacks:rajpolice_hacks_303@3.110.120.158/rajpolice_hacks';
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then( () => {
        console.log('Connection to DataBase Successful');
    })
    .catch( (e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});