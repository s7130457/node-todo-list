import express from "express";
import todoRouter from './route/todo';
var cors = require('cors');

const app: express.Application = express();

app.use('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', todoRouter);
app.use("/static", express.static(`${__dirname}/public`));

const server = app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
