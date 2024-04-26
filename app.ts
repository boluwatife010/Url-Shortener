import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import urlRouter from './source/route/urlroute';
const app = express();
app.use(bodyParser.json());
app.use('/url', urlRouter);
app.listen(8085, async () => {
    console.log('Server is running at port 8085.')
    await mongoose.connect('mongodb://127.0.0.1/urlShortener');
    console.log('Connected to mongodb.')
})