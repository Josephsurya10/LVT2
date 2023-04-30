const sql = require('mssql/msnodesqlv8')
exports.signup = async(req,res)=>{
   

              const { username,lastname,useremail,userpassword,Urole} = req.body;

              try {
                // Create a new request to insert user registration data into the database
              
                const request = new sql.Request();
                request.input('Urole', sql.VarChar, Urole);
                request.input('username', sql.VarChar, username);
                request.input('lastname', sql.VarChar, lastname);
                request.input('useremail', sql.VarChar, useremail);
                request.input('userpassword', sql.VarChar, userpassword);
                
               
                await request.query(
                  'INSERT INTO users (username,lastname,useremail,userpassword,Urole) VALUES (@username,@lastname, @useremail,@userpassword,@Urole)'
                );
                    
                console.log('User registered successfully');
                res.json({
                    message:"User registered successfully"
                });
                
              } catch (err) {
                console.error('Error registering user:', err);
                res.status(500).json({ error: 'Failed to register user' });
              }
      
}

exports.signout= (req,res) =>{
    res.json({
        message:"User signout"
    });
}

exports.signin = (req,res)=> {
  try{
    const requestS = new sql.Request();
    const { useremail, userpassword} = req.body;
    //console.log(req.body);
    const query1 = "SELECT * FROM users WHERE useremail = '"+useremail+"'  AND userpassword = '"+userpassword+"'";
    requestS.query(query1,(err, result) => {
      //console.log(result);
      if (err) {
        console.log('Error retrieving user:', err);
        res.status(500).send('Error retrieving user');
      } else if (result.recordset.length === 0) {
        res.status(401).send('Invalid email or password');
      } else {
        const user = result.recordset[0];
       
          res.json({
            id: user.id,
            username: user.username,
            useremail: user.useremail,
            Urole:user.Urole
          }).status(200);
        }
      
    })
  }catch(err){
    console.error('Error in signin:', err);
    res.status(500).json({ error: 'Failed to signin' });
  }
}


