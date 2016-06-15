'use strict'

module.exports = function (req, res) {
    var timestamp = {
        unix: null,
        natural: null
    }
    res.json(timestamp);
};