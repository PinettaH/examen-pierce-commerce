import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router as apiRouter } from './router/router.js'
import { dbConnection } from './database/config.js'
import app from './app.js';

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})