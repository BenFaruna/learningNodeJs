const friendModel = require('../models/friends.model');

function getFriends(req, res) {
    res.json(friendModel);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = friendModel[friendId];

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json(
            {
                error: 'Friend ID not fount',
            }
        )
    }
}

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Friend name not found'
        });
    }

    const newFriend = {
        id: friendModel.length,
        name: req.body.name,
    };
    friendModel.push(newFriend);
    res.json(newFriend);
}

module.exports = {
    getFriends,
    getFriend,
    postFriend,
}