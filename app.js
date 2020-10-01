const express = require('express');
const morgan = require('morgan');
const app = express();
const wikiRouter = require('./routes/wiki.js')
const usersRouter = require('./routes/users.js')
const bodyParser = require('body-parser');
const { db, Page, User } = require('./models');


app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname +'/public'));


app.get('/', (req,res,next)=>{
    res.send('hello world');
});
app.get('/page', async (req, res, next) => {
    await console.log(Page)
    res.send(Page)
})
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })
  const PORT = 1337;
//db.sync({force:true})
const init = async () => {
   
    await db.sync({force:true})
    app.listen(PORT, ()=>{
        console.log(`App listening in PORT ${PORT}`)
        });
}
init()




