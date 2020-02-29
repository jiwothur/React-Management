const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customer',(req,res) => {
    res.send([
        {   
          
            'id' : 1,
            'name' : '홍길동',
            'age' : '28',
            'gender' : '남'
          },
          {
            'id' : 2,
            'name' : '홍길동2',
            'age' : '31',
            'gender' : '여'
          },
          {
            'id' : 3,
            'name' : '홍길동3',
            'age' : '32',
            'gender' : '남'
          }
    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
