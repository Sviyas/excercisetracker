import express from 'express';
import fs from 'fs';
import { v4 as UUIDv4 } from 'uuid';
import path from 'path';

const Users = express.Router();

Users.get('/api', (req, res) => {
  res.status(200).json({
    message: 'homepage'
  });
});

// ? user api

Users.post('/api/users', (req, res) => {
  // ?

  const createUser = {
    username: req.body.username,
    _id: UUIDv4()
  };
  // console.log('uuuuuuuuuuuid : ', [createUser]);

  const user = JSON.stringify(createUser);
  console.log('store the value : ', user);

  const userData = JSON.parse(user);

  //   console.log('        ffffffffffffffffff', userData);
  //   const parsethe = JSON.stringify(userData);
  //   console.log('        ffffffffffffffffff', parsethe);

  //  ? store the value in file
  fs.writeFile(path.resolve('../data.json'), user, (err, da) => {
    if (err) {
      throw err;
    } else {
      console.log('data value : ', da);
      return da;
    }
  });

  // ? Read the stored file

  return res.status(200).json({
    message: 'Success',
    data: [userData]
  });
});
export default Users;
