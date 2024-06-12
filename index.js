// express used
const express = require('express');
// import connection file
const connection = require('./DB/connection')
// import library 
const body_parse = require('body-parser')
// create express function or use express function 
const app = express()
// variable create
const port = 3000
// middleware for body parse
app.use(body_parse.json())

// get is method , / is url ,req used for payload ,res is used to send data 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// conncetion implement here
// query for fetch data of table
app.get('/getuser', async (req, res) => {
  const querySql = 'SELECT * FROM `users`;';
  const rows = await connection({ querys: querySql, values: [] });
  console.log(rows)
  res.send(rows)
  })

  // post query
  app.post('/insertuser', async (req, res) => {
    // const querySql = 'INSERT INTO `users` (`id`, `name`, `rollno`, `classname`, `address`, `mobileno`) VALUES (NULL, 'Mansi', '3', '15 th', 'Sangli', '7890876578');';
    const name = req.body.name;
    const rollno = req.body.rollno;
    const classname = req.body.classname
    const address = req.body.address
    const mobileno = req.body.mobileno
    const querySql = `INSERT INTO users ( name, rollno, classname, address, mobileno) VALUES ('${name}', '${rollno}', '${classname}', '${address}', '${mobileno}');`;
    console.log(querySql)
    const rows = await connection({ querys: querySql, values: [] });
    console.log(rows)
    res.send(rows)
    })


    // patch query
    app.patch('/updateuser/:id', async (req, res) => {
      const {id} = req.params
      console.log(id)
      const address = req.body.address
      const mobileno = req.body.mobileno
      // const querySql = `UPDATE users SET address='Kolhapur', mobileno = '99999999' WHERE id = 1;`;
      const querySql = `UPDATE users SET address='${address}', mobileno = '${mobileno}' WHERE id = ${id};`;
      const rows = await connection({ querys: querySql, values: [] });
      console.log(rows)
      res.send(rows)
      })


      // delete query
      app.delete('/deleteuser/:id', async (req, res) => {
        const {id} = req.params
        console.log(id)
        const querySql = `DELETE FROM users WHERE id=${id};`;
        const rows = await connection({ querys: querySql, values: [] });
        console.log(rows)
        res.send(rows)
        })


        // put query
        app.put('/updateuserput/:id', async (req, res) => {
          const {id} = req.params
          console.log(id)
          const name = req.body.name;
          const rollno = req.body.rollno;
          const classname = req.body.classname
          const address = req.body.address
          const mobileno = req.body.mobileno
          const querySql = `UPDATE users SET name='${name}',rollno='${rollno}',classname='${classname}', address='${address}', mobileno = '${mobileno}' WHERE id = ${id};`;
          const rows = await connection({ querys: querySql, values: [] });
          console.log(rows)
          res.send(rows)
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


    app.post('/createuser', (req, res) => {
      console.log("req", req.body)
      // req body store in variable this is used in further process that means for used in database
      const newUser = req.body;
      res.send({message:'user is created!'})
    })


    app.post('/createclient',(req,res)=>{
      console.log("req",req.body)
      res.send({message:'client is created'})
    })

    // for update (particular data update) 
    app.patch('/updateclient/:id',(req,res)=>{
      const {id} = req.params
      console.log(id)
      console.log("req",req.body)
      res.send({message:'customer is updated'})
    })

    // for overall data update (all over row update)
    app.put('/updateclientwithput/:id',(req,res)=>{
      const {id} = req.params
      console.log(id)
      console.log("req",req.body)
      res.send({message:'client is updated'})
    })

    // delete api (used for user or specific row)
    app.delete('/deleteclient/:id',(req,res)=>{
      // params means parameter
      const {id} = req.params
      console.log(id)
      // payload data
      console.log("req",req.body)
      res.send({message:'client is deleted'})
    })


  //to run function or code for port
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })