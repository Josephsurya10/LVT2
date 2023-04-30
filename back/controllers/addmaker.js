const sql = require('mssql/msnodesqlv8');

exports.addmaker = async(req,res)=>{
  const {makersname,makersemail,makersaddress,makersdescription } = req.body;
    console.log(req.body);
              try {
                // Create a new request to insert user registration data into the database
                const requestq = new sql.Request();
                requestq.input('makersname', sql.VarChar, makersname);
                requestq.input('makersemail', sql.VarChar, makersemail);
                requestq.input('makersaddress', sql.VarChar, makersaddress);
                requestq.input('makersdescription', sql.VarChar, makersdescription);
                
                console.log(makersaddress);
                await requestq.query(
                  'INSERT INTO makers(makersname,makersemail,makersaddress,makersdescription) VALUES (@makersname,@makersemail,@makersaddress,@makersdescription)'
                );
                    
                console.log('maker added successfully');
                res.json({
                    message:"maker added successfully"
                });
              } catch (err) {
                console.error('Error adding maker:', err);
                res.status(500).json({ error: 'Failed to add maker' });
              }
}

