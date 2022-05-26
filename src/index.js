const express = require('express')
const app = express()
var morgan = require('morgan')
const route = require('./router')

app.use(morgan('combined'))
app.use(express.json());
route(app);

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})