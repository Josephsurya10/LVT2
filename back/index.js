

const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8')
const authroute = require("./routes/auth");
const postajob = require("./routes/postajob");
const cors = require("cors");
const addmaker = require("./routes/addmaker")
const app = express();


app.use(bodyParser.json());
app.use(cors());



const config = {  
  driver: 'msnodesqlv8',
  server: 'localhost', 
  database: 'sekarsurya',
  options:{
    trustServerCertificate: true,
    trustedConnection: true
  }
};

// Connect to MS SQL Server
sql.connect(config)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));


app.use("/api/auth",authroute);
app.use("/api/post",postajob); 
app.use("/api/make",addmaker); 



app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';

  sql.query(query)
  .then(result => {
    console.log('Retrieved data:', result.recordset);
    res.json(result.recordset); // send retrieved data as JSON response
  })
  .catch(err => {
    console.error('Failed to retrieve data from MSSQL database:', err);
    res.status(500).send('Failed to retrieve data from MSSQL database'); // send error response
  });
});
app.get('/api/jobs', (req, res) => {
  const query = 'SELECT * FROM jobs';

  sql.query(query)
  .then(result => {
    console.log('Retrieved data:', result.recordset);
    res.json(result.recordset); // send retrieved data as JSON response
  })
  .catch(err => {
    console.error('Failed to retrieve data from MSSQL database:', err);
    res.status(500).send('Failed to retrieve data from MSSQL database'); // send error response
  });
});
app.get('/api/makers', (req, res) => {
  const query = 'SELECT * FROM makers';

  sql.query(query)
  .then(result => {
    console.log('Retrieved data:', result.recordset);
    res.json(result.recordset); // send retrieved data as JSON response
  })
  .catch(err => {
    console.error('Failed to retrieve data from MSSQL database:', err);
    res.status(500).send('Failed to retrieve data from MSSQL database'); // send error response
  });
});
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
