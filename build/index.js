"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var record = {
    "opening_datetime": "2019-05-17T10:00:00Z",
    "closing_datetime": "2019-05-17T20:00:00Z",
    "reservation": [
        {
            "start_datetime": "2019-05-17T10:00:00Z",
            "end_datetime": "2019-05-17T11:00:00Z"
        },
        {
            "start_datetime": "2019-05-17T12:00:00Z",
            "end_datetime": "2019-05-17T14:00:00Z"
        }
    ]
};
var checkValidReservation = function (room, date_reservation) {
    var isValid = true;
    if (moment(date_reservation).isBetween(moment(room.opening_datetime), moment(room.closing_datetime))) {
        room.reservation.forEach(function (res) {
            if (moment(date_reservation).isBetween(moment(res.start_datetime), moment(res.end_datetime))) {
                isValid = false;
            }
        });
        return isValid;
    }
    else {
        return false;
    }
};
console.log(checkValidReservation(record, '2019-05-17T09:30:00Z'));
