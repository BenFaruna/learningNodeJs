const express = require('express');
const path = require('path');

const homeRouter = require('./routes/home.router');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Internet Flow',
        caption: 'Flow chart',
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
