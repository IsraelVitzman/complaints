import {CreateConnection} from '../db/connectuon'

export async function UpdateStatus(req, res) {
  try {
    const { typeComplaints, complaints } = req.body;
    const connection = await CreateConnection();
    const status = 'טופל';
    const query = `UPDATE complaints SET status = ? WHERE typeComplaints = ? AND complaints = ?`;
    const [result] = await connection.execute(query, [status, typeComplaints, complaints]);
    
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'סטטוס עודכן בהצלחה' });
    } else {
      res.status(404).json({ message: 'לא נמצאה תלונה מתאימה לעדכון' });
    }

  } catch (err) {

    console.log(err);
    res.status(400).json({ error: err });
  }
}

export async function AddComplaints(req ,res){
 
    try {
        const {typeComplaints,complaints}=req.body
        const connection = await CreateConection();
        const status = 'בטיפול'
        const query = `INSERT INTO users (typeComplaints,complaints,status) VALUES (?, ?,?)`;
        await connection.execute(query, [typeComplaints,complaints,status]);

        res.status(201).json({message:'insert successfully'})
        

    } catch (err) {
        console.log('invalid  error', err);
        res.status(500).json({message:'invalid error'});
    }
}
export async function GetAllComplaints(req, res) {
  try {
    const connection = await CreateConnection();
    const query = `SELECT * FROM complaints`;
    const [rows] = await connection.execute(query);
    res.status(200).json({ data: rows });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message || err });
  }
}
