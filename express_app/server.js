const express = require('express');

const PORT = 3000;
const app = express();

const friends = [
    {
        id:0,
        name: 'John Doe',
    },
    {
        id: 1,
        name: 'G.I Jane',
    },
]

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.get('/', (req, res) => {
    res.send('This is the express framework');
})

app.get('/friends', (req, res) => {
    res.json(friends);
})

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json(
            {
                error: 'Friend ID not fount',
            }
        )
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
