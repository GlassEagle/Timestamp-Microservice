'use strict';

module.exports = function (req, res) {
    var timestamp = {
        unix: null,
        natural: null
    };
    
    var param = decodeURIComponent(req.url.substring(1));
    var num = Number(param);
    var re = /^([a-z]+) ([0-9]+), ([0-9]+)$/i;
    
    if ((num || num === 0) && Number.isSafeInteger(num)) {
        var date = new Date(num);
        
        timestamp.unix = date.valueOf();
        timestamp.natural = dateToString(date);
    } else if (re.test(param)) {
        var date = new Date(0);
        var array = re.exec(param);
        var monthVal = monthToInt(array[1]);
        
        if(monthVal !== -1) {
            date.setUTCFullYear(array[3], monthVal, array[2]);
            
            timestamp.unix = date.valueOf();
            timestamp.natural = dateToString(date);
        }
    }
    
    res.json(timestamp);
};

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function monthToInt (str) {
    for(var i = 0; i < month.length; i++){
        if(str.toUpperCase() == month[i].toUpperCase()) {
            return i;
        }
    }
    return -1;
}

function dateToString(date) {
    return month[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
}
