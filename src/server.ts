import express from 'express';
import routes from './routes'
const app = express();
app.use(express.json());
//app.use(express.urlencoded());

app.use(routes);


app.listen(8383); 