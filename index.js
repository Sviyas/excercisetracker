import express   from 'express';
import fs from 'fs';
import cors from 'cors';
// import { v4 as UUIDv4} from 'uuid';
import { config } from 'dotenv';
import Users from './routes/user'

// ? set env configuration
config()




const app = express();

app.use(express.urlencoded({ extended : true}));
app.use(express.json())

// ? setup multiple origin 
app.use(cors({
  origin : '*',optionsSuccessStatus :200
}))

// ? setup file static 
app.use(express.static('public'))



// const uniqueID = UUIDv4()
// console.log('unique id : ',uniqueID);
// ? 



// ? user route file
app.use('/',Users)
// app.use('/',Users);
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')
// });

// ? homepage
app.get("/api",(req,res) => {

  res.status(200).json({
    message : 'homepage'
  })
})

// ? user create 
app.post("/api/users",(req,res)=> {
  // ? receive a request in array
  const data = [req.body];
  console.log('data :',data);

  // ? parse the value
  const storeData = JSON.stringify(data)
  console.log('data :',storeData);

  // ? store the root file
 fs.writeFile('./data.json',storeData, err => {
    if(err) {
      console.error(err)
    }
  })

  
  return res.status(200).json({
    message : 'Success',
  })
})




app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ',process.env.PORT)
})
