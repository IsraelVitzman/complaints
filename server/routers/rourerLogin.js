import express from 'express'
import { Login ,Enrollment} from '../services/loginANDenrollment.js'
const router =express.Router()

router.post('/login',(req,res)=>{
      Login(req,res)
})

router.post('/enrollment',(req,res)=>{
     Enrollment(req,res)
})