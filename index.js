// express used
const express = require('express')
// create express function or use express function 
const app = express()
// variable create
const port = 3000

// get is method , / is url ,req used for payload ,res is used to send data 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getuser', (req, res) => {
    res.send({"test":'this is user data'})
  })

  app.get('/getresources', (req, res) => {
    res.send({"resource":'get all resources!'})
  })

  app.get('/getdata', (req, res) => {
    res.send([
        {"text":'get all data',"abc":'get all data'},
        {"text":'get all data',"abc":'get all data'}
    ])
  })

  app.get('/getcity', (req, res) => {
    res.send('Hello Kolhapur!')
  })

  //   array used
  app.get('/getstudentdata', (req, res) => {
    res.send([{"Kartika":'Kolhapur'},{"Sonam":'Satara'}])
  })

  app.get('/getstates', (req, res) => {
    res.send([{"1":'India'},{"2":'USA'},{"3":'Australia'},{"4":'Urope'}])
  })

  

//to run function or code for port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})