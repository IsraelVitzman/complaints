import express from 'express'
import { AddComplaints ,GetAllComplaints,UpdateStatus} from '../services/complaints'
const router =express.Router()

router.post('/addcomplaints',(req,res)=>{
      AddComplaints(req,res)
})

router.get('getallcomplaints',(req,res)=>{
     GetAllComplaints(req,res)
})
router.post('updatestatus',(req,res)=>{
     UpdateStatus(req,res)
})