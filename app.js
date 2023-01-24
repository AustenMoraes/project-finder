const express = require('express')
const app = express()
const db = require('./db/connection.js')
const bodyParser = require('body-parser')


const PORT = 3000

app.listen(PORT, function(){
  console.log(`o express esta rodando ${PORT}`)
})

// bodt parser
app.use(bodyParser.urlencoded({extended:false}))

// db connection

db
  .authenticate()
  .then(()=>{
    console.log('conectou')
  })
  .catch(err => {
    console.log('ocorreu um erro', err)
  })

// Routes

app.get('/', (req,res)=>{
  res.send('esta funcionando4')
})

// projects routes
app.use('/projects', require('./routes/projects'))