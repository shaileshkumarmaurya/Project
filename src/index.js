import dotenv from "dotenv";

import connectDB from "./db/index.js";


dotenv.config({
   path:'./env'
})



























/*

const mongoose=require("mongoose")
  import {DB_NAME} from "./constants"

  const express=require("express")

  const app=express()
(async ()=>{
  try{
  await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on("eror",(error)=>{
     console.log("error",error)
     throw err
  })
  app.listen(process.env.PORT,()=>{
     console.log(`app is listening on port${process.env.PORT}`)
     
  })
}
  catch(error){
     console.error("erroer",error)
     throw err
  }
})()*/
