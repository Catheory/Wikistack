const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname +'/public'));


app.get('/', (req,res,next)=>{
    res.send('');
});


const PORT = 1337;
app.listen(PORT, ()=>{
console.log(`App listening in PORT ${PORT}`)
});