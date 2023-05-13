import express from 'express';
import fs from 'fs';
import { v4 as UUIDv4 } from 'uuid';
import path from 'path';
import { users } from '../user.data';
const Users = express.Router();

Users.get('/api', (req, res) => {
  res.status(200).json({
    message: 'homepage'
  });
});

// ? user api

Users.post('/api/users', (req, res) => {
  const { username } = req.body;
  // const requested = req.body;
  // const value = JSON.stringify(username);
  // console.log('🚀 ~ file: user.js:20 ~ Users.post ~ value', value);

  const id = UUIDv4();

  const table = {
    username: 'Viyas. S',
    _id: 'difaudiufoaiufoien'
  };

  // var table = {
  //   userName: username,
  //   _id: id
  // };
  // console.log('🚀 ~ file: user.js:27 ~ Users.post ~ table', JSON.stringify(table));

  var json = JSON.stringify(table);

  console.log('Table :', json);

  // const val = users.push(json);
  // console.log('🚀 ~ file: user.js:35 ~ Users.post ~ val', val);

  const file = fs.writeFile('../StoreData.json', json, 'utf-8', err => {
    if (err) {
      return err;
    }
  });
  console.log('🚀 ~ file: user.js:42 ~ fiel ~ fiel', file);

  // var obj = [json];

  // console.log('🚀 ~ file: user.js:35 ~ Users.post ~ obj', obj);
  // console.log('Storeing the Values :', obj);
  // var store = obj.table.push(convert);
  // console.log('Store the Data :', store);

  // console.log('Object Data :', JSON.parse(JSON.stringify(obj)));
  // console.log('Object :', JSON.parse(obj.table));

  // console.log('Object Data :', store);
  // ? parse and send the response
  // const response = JSON.parse(createUser);

  // return res.status(200).json({
  //   message: 'Success'
  // data: [response]
  // });
});
export default Users;
