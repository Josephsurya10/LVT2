const sql = require('mssql/msnodesqlv8')

exports.postajob = async(req,res)=>{
  const { createdby,Uphone,Uemail,Uaddress,Udescription } = req.body;

              try {
                // Create a new request to insert user registration data into the database
                const requestJ = new sql.Request();
                requestJ.input('createdby', sql.VarChar, createdby);
                requestJ.input('Uphone', sql.VarChar, Uphone);
                requestJ.input('Uemail', sql.VarChar, Uemail);
                requestJ.input('Uaddress', sql.VarChar, Uaddress);
                requestJ.input('Udescription', sql.VarChar, Udescription);
                
                await requestJ.query(
                  'INSERT INTO jobs(createdby,Uphone,Uemail,uaddress,Udescription) VALUES (@createdby,@Uphone,@Uemail,@Uaddress,@Udescription)'
                );
                    
                console.log('Job posted successfully');
                res.json({
                    message:"Job posted successfully"
                });
              } catch (err) {
                console.error('Error posting job:', err);
                res.status(500).json({ error: 'Failed to post a job' });
              }
}

