import express from 'express'
import {prisma} from "./lib/prisma.js"
import cors from 'cors'
const app = express();



app.use(express.json())
app.use(cors())



app.get("/", async(req, res) => {

  const users = await prisma.user.createMany({
    data: {
      name: "Raj",
      age: 20,
      email: "raaz.r@gmail.com"
    }
  })


  const userCount = await prisma.user.count();

  

  res.json({
    message: "Welocome to the Count page",
    count: userCount
  })
})




app.listen(4000, () => {
  console.log(`SRVR is running...`)
})