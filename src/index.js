const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
const route = require('./router')

app.use(morgan('combined'))
app.use(express.json());
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})