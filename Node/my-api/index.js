const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Patel" },
    { id: 3, name: "John" },
    { id: 4, name: "Doe" }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

app.post('/api/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not found');
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
});

app.listen(3000, () => console.log("Server running on port 3000"));
