const express = require('express')
const app = express()
const port = 3000

const userRouter = require('./user')

app.get('/', (req, res)=>  {
  res.send('Home!')
})

app.get('/about', (req, res) => {
  const kelas ={
    id: '1234567890',
    nama:'M. Taufiq',
  }
  res.send(kelas)
})
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})