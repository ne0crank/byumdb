const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

var messages = [{user: "Jim", text: "yes"}, {user: "Jim" , text: "messages"}];
var users = [{userName: "Jim", password: "1"}];

app.get('/messages', (req, res) => {
    res.send(messages);
});

app.get('/messages/:id', (req, res) => {
    res.send(messages[req.params.id]);
});

app.post('/messages', (req, res) => {
    const userId = req.header('Authorization');
    const user = users[userId];
    let msg = {user: user.userName, text: req.body.message};
    messages.push(msg);
    res.json(msg);
});

app.post('/register', (req, res) => {
    let registerData = req.body;
    let newIndex = users.push(registerData);
    let userId = newIndex - 1;

    let token = jwt.sign(userId, '123');

    res.json(token);
});

app.listen(port, () => console.log('app running'));