// app.js (nuevo archivo)

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router as apiRouter } from './router/router.js';
import { dbConnection } from './database/config.js';

const app = express();

app.use(cors());
dbConnection();
app.use(express.json());
app.use('/api', apiRouter);

export default app;