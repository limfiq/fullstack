const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Users Page!')
})

router.post('/addUser', (req, res) => {
  console.log(req.body); // {name: 'John Doe'}
  res.json({msg: "User added!"}); 
})
router.put('/users/:id', (req, res) =>{
  const id = req.params
  res.send(id)
})
router.delete('/users/:usersid', (req, res) =>{
  res.send(req.params)
})
  
module.exports=router