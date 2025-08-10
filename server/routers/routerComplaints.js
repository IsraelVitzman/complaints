import express from 'express'
import { AddComplaints ,GetAllComplaints,UpdateStatus} from '../services/complaints.js'
const router =express.Router()
console.log("בקשה חדשה לתלונה");

router.post('/addcomplaints',(req,res)=>{
      AddComplaints(req,res)
})

router.get('/getallcomplaints',(req,res)=>{
     GetAllComplaints(req,res)
})
router.post('updatestatus',(req,res)=>{
     UpdateStatus(req,res)
})
export default router;