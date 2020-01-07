const express = require('express');


const app = express()




const PORT  = 8080 || process.env.PORT;


app.listen(PORT,( req,res,next) => (
     console.log('running on  port 8080')
 ));