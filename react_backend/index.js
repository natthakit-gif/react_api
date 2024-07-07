const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3244;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '653040620-7',
    database: 'reactdb'
});

db.connect((err) => {
    if(err) {
        console.log('Database Error Connecting');
        console.log(err);
    } else {
        console.log('Connecting Success')
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM post', (err, results) => {
        if (err) {
            res.status(500).send('Error get database');
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/api/insertData', (req, res) => {
    const {tt, tx} = req.body;
    db.query("INSERT INTO post (title, text) VALUES(?, ?)",[tt, tx],(err,results)=>{
        if (err) {
            res.status(500).send('Error post');
        } else {
            res.status(200).json('Post');
        }
    })
});

app.delete('/api/deleteData', (req, res) => {
    const {id} = req.query;
    db.query("DELETE FROM post WHERE (id = ?)",[id],(err,results)=>{
        if (err) {
            res.status(500).send('Not delete');
        } else {
            res.status(200).json('Delete');
        }
    });
});

app.listen(port, () => {
    console.log('API open in port ' + port)
})