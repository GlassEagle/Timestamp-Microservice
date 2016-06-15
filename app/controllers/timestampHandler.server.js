'use strict'

module.exports = function (req, res) {
    var timestamp = {
        unix: null,
        natural: null
    };
    
    var param = req.url.substring(1);
    var num = Number(param);
    
    if ((num || num === 0) && Number.isSafeInteger(num)) {
        var date = new Date(num);
        var str = month[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
        timestamp.unix = date.valueOf();
        timestamp.natural = str;
    }
    
    res.json(timestamp);
};

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];