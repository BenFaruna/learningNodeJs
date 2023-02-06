const path = require('path');

function getMessages(req, res) {
    // res.json({
    //     body: 'This is a message to the client',
    // });
    // for sending files, you use the sendFile function on the response object
    // res.sendFile(path.join(__dirname, '..', 'public', 'internet_flow_chart.png'));
    res.render('messages', {
        title: 'Messages',
        food1: 'Wheat',
        food2: 'Poundo Yam',
    })
}

function postMessage(req, res) {
    res.json(req.body);
}

module.exports = {
    getMessages,
    postMessage,
}
