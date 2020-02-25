const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DB_URL, dbOptions, (err) => {
  if (err) {
    console.log('Database not connected ❌')
  } else {
    console.log('Connected to Database ✅')
  }
})

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT} ✅`)
})