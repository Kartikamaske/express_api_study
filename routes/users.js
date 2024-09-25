// create variable for used function
const express = require('express');
var router = express.Router();
const connection = require('../DB/connection')

router.get('/', async (req, res) => {
    const querySql = 'SELECT * FROM `users`;';
    const rows = await connection({ querys: querySql, values: [] });
    console.log(rows)
    res.send(rows)
    })

    
router.post('/', async (req, res) => {
        // const querySql = 'INSERT INTO `users` (`id`, `name`, `rollno`, `classname`, `address`, `mobileno`) VALUES (NULL, 'Mansi', '3', '15 th', 'Sangli', '7890876578');';
        
        const name = req.body.name;
        const rollno = req.body.rollno;
        const classname = req.body.classname
        const address = req.body.address
        const mobileno = req.body.mobileno
    
        if(name && rollno && classname && address && mobileno){
        const querySql = `INSERT INTO users ( name, rollno, classname, address, mobileno) VALUES ('${name}', '${rollno}', '${classname}', '${address}', '${mobileno}');`;
        console.log(querySql)
        const rows = await connection({ querys: querySql, values: [] });
        console.log(rows)
        res.send(rows)
        }else{
          res.send({message:"invalid data"})
        }
        
        })

 router.patch('/:id', async (req, res) => {
            const {id} = req.params
            console.log(id)
            const address = req.body.address
            const mobileno = req.body.mobileno
      
            if(id && address && mobileno){
              // to get specific id from table
              const userSql = `SELECT * FROM users where id = '${id}'`;
              const userRows = await connection({ querys: userSql, values: [] });
              console.log(userRows)
              // console.log(userRows[0].Roll)    //get array item 
              // condition for id not empty ,lenght not grater than 0 and roll==user
              if(userRows && userRows.length > 0 &&  userRows[0].Roll=="User"){
                const querySql = `UPDATE users SET address='${address}', mobileno = '${mobileno}' WHERE id = ${id};`;
                const rows = await connection({ querys: querySql, values: [] });
                console.log(rows)
                res.send(rows)
              }
              else{
                res.send({message:"Admin not update data"})
              }
              
            }
            else{
              res.send({message:"user not update"})
            }
           
            })
   // delete query
   router.delete('/:id', async (req, res) => {
    const {id} = req.params
    console.log(id)

    if(id){
      const querySql = `DELETE FROM users WHERE id=${id};`;
      const rows = await connection({ querys: querySql, values: [] });
      console.log(rows)
      res.send(rows)
    }else{
      res.send({message:"user deleted"})
    }
   
    })
     // put query
     router.put('/:id', async (req, res) => {
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

    module.exports = router;