import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { config } from 'dotenv';
import Users from './routes/user';

// ? set env configuration
config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ? setup multiple origin
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200
  })
);

// ? setup file static
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', Users);

// ? user create

app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ', process.env.PORT);
});

