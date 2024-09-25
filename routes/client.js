const express = require('express');
var router = express.Router();
const connection = require('../DB/connection')



// SELECT * FROM `client`;

router.get('/', async (req, res) => {
    const querySql = 'SELECT * FROM `client`;';
    const rows = await connection({ querys: querySql, values: [] });
    console.log(rows)
    res.send(rows)
    })


    // post query 
    router.post('/', async (req, res) => {

          // INSERT INTO `client` (`client_id`, `client_name`, `client_sallary`, `client_destination`, `client_experiance`, `client_department`) VALUES ('1', 'SV communication', '10000', 'software developer', '2 year', 'IT');

        const client_name = req.body.client_name;
        const client_sallary = req.body.client_sallary;
        const client_destination = req.body.client_destination
        const client_experiance = req.body.client_experiance
        const client_department = req.body.client_department
        const client_role = req.body.client_role
        const client_address = req.body.client_address

    
        if(client_name && client_sallary && client_destination && client_experiance && client_department && client_role && client_address){
        const querySql = `INSERT INTO client ( client_name, client_sallary, client_destination, client_experiance, client_department,client_role,client_address) VALUES ('${client_name}', '${client_sallary}', '${client_destination}', '${client_experiance}', '${client_department}','${client_role}','${client_address}');`;
        console.log(querySql)
        const rows = await connection({ querys: querySql, values: [] });
        console.log(rows)
        res.send(rows)
        }else{
          res.send({message:"invalid data"})
        }
        
        })


        router.patch('/:client_id', async (req, res) => {
            const {client_id} = req.params
            console.log(client_id)
            const client_name = req.body.client_name;
            const client_sallary = req.body.client_sallary;


            if(client_id && client_name && client_sallary){
              // to get specific id from table
              const clientSql = `SELECT * FROM client where client_id = '${client_id}'`;
              const clientRows = await connection({ querys: clientSql, values: [] });
              console.log(clientRows)
              // console.log(clientRows[0].Roll)    //get array item 
              // condition for client_id not empty ,lenght not grater than 0 
              if(clientRows && clientRows.length > 0 &&  clientRows[0]){
                const querySql = `UPDATE client SET client_name='${client_name}', client_sallary = '${client_sallary}' WHERE client_id = ${client_id};`;
                const rows = await connection({ querys: querySql, values: [] });
                console.log(rows)
                res.send(rows)
              }
              
            }
            else{
              res.send({message:"client update"})
            }
           
            })


            // delete query 
            router.delete('/:client_id', async (req, res) => {
                const {client_id} = req.params
                console.log(client_id)
            
                if(client_id){
                  const querySql = `DELETE FROM client WHERE client_id=${client_id};`;
                  const rows = await connection({ querys: querySql, values: [] });
                  console.log(rows)
                  res.send(rows)
                }else{
                  res.send({message:"client deleted"})
                }
                })



module.exports = router;