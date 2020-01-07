const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const path = require('path');



// registers hbs.engine with the express app and set handlebars middleware
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');



app.get('/', function(req,res){

    res.render('home',{
        stuff:" this is stuff"
    });
})

const PORT  = 8080 || process.env.PORT;


// express.static with path.join to point to a file to display;


app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT,( req,res,next) => (
     console.log('running on  port 8080')
 ));