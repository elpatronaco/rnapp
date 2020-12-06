const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const PORT = 4000
app.use(cors())
app.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT)
})

const connection = mongoose.connection

connection.once('open', () => {
  console.log('Connexión a la BBDD correcta')
})

mongoose.connect(
  'mongodb+srv://rnappuser:4N3rjxlOHoz8ubkw@cluster0.e7dio.mongodb.net/rnapp?retryWrites=true&w=majority'
)

const Schema = mongoose.Schema

let users = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
})

const router = express.Router()

app.use('/', router)

router.route('/users').get((req, res) => {
  users.find({}, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})