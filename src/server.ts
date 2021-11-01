import express from 'express';
const app = express();
app.use(express.json());
//app.use(express.urlencoded());


app.get('/', (req, res)=>{
    return res.status(200).jsonp({msg:'Hello'});
});

app.listen(8383); 