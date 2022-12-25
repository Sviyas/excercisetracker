const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// ? setup multiple origin 
app.use(cors({
  origin : '*',optionsSuccessStatus :200
}))

// ? setup file static 
app.use(express.static('public'))



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});





const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
