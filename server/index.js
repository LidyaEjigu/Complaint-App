
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRouter from './routes/todo.js'
import router from './routes/complaint.js';
import authRouter from './routes/user_route.js';
import announcementRouter from './routes/annuncement.js';
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/todo',todoRouter)
app.use('/comp',router)
app.use('/post',announcementRouter)
app.use('/auth',authRouter)


const CONNECTION_URL = "mongodb://localhost:27017/mobileapp";

const PORT = process.env.PORT|| 7000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



