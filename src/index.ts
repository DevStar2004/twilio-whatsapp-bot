import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/callback", (req:any, res:any) => {
    res.sendStatus(200)
})

app.listen(4000, () => {
    console.log('Application has started.');
})

app.get("/", (req:any, res:any) => {
    res.send("Its running")
});

