import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
require('dotenv').config();
import express from "express";
import cors from 'cors'
import helmet from "helmet";

import db from './database/index.js'


const app=express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// app.use('/insta', );

app.listen(process.env.PORT, () => {
    db()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running but Database connection failed");
            console.log(error);
        });
});