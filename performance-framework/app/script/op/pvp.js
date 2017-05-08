/**
 * Created by guangwei.lin on 2016/8/10.
 */
var Sock = require('net');
var args = process.argv[2] || '';

var socket = Sock.Socket();
host = '119.15.139.7';
port = 8400;

var body = {
    "battleRect": {"y": 130, "x": 0, "height": 180, "width": 2880},
    "k": 0,
    "teams": [[{
        "attr": [10158, 26733.0, 110, 0, 0, 0, 5076.0, 5582.0, 2840.0, 0.0, 0.0, 26733.0, 0.0, 15.0, 1864.0, 10.0, 5.0, 5.0, 200.0, 200.0, 90.0, 90.0, 3926.0, 3915.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 1,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 15800, "lv": 1}, {"i": 15801, "lv": 110}, {"i": 15802, "lv": 110}, {
            "i": 15803,
            "lv": 110
        }, {"i": 15804, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}],
        "x": 6,
        "_id": 10158
    }, {
        "attr": [10161, 19989.0, 110, 0, 0, 0, 4961.0, 4911.0, 3045.0, 0.0, 0.0, 19989.0, 0.0, 15.0, 1644.0, 3.0, 3.0, 0.0, 200.0, 200.0, 90.0, 90.0, 4170.0, 3189.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 2,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 16100, "lv": 1}, {"i": 16101, "lv": 110}, {"i": 16102, "lv": 110}, {
            "i": 16103,
            "lv": 110
        }, {"i": 16104, "lv": 110}, {"i": 16108, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {
            "i": 0,
            "lv": 110
        }],
        "x": 6,
        "_id": 10161
    }, {
        "attr": [10238, 17673.0, 110, 0, 0, 0, 3854.0, 2234.0, 4806.0, 0.0, 0.0, 17673.0, 0.0, 15.0, 3.0, 1430.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 2925.0, 5762.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 120.0, 0, 0, 0, 0, 38],
        "i": 2,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 23800, "lv": 1}, {"i": 23801, "lv": 110}, {"i": 23802, "lv": 110}, {
            "i": 23803,
            "lv": 110
        }, {"i": 23804, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}],
        "x": 6,
        "_id": 10238
    }, {
        "attr": [10266, 22434.0, 110, 0, 0, 0, 4092.0, 2141.0, 7000.0, 0.0, 0.0, 22434.0, 0.0, 15.0, 3.0, 1192.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 5664.0, 5664.0, 0.0, 0.0, 809.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 1,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 26600, "lv": 1}, {"i": 26601, "lv": 110}, {"i": 26602, "lv": 110}, {
            "i": 26603,
            "lv": 110
        }, {"i": 26604, "lv": 110}, {"i": 26612, "lv": 110}, {"i": 26616, "lv": 110}, {"i": 0, "lv": 110}, {
            "i": 0,
            "lv": 110
        }],
        "x": 6,
        "_id": 10266
    }, {
        "attr": [10272, 19177.0, 110, 0, 0, 0, 3858.0, 2234.0, 4816.0, 0.0, 0.0, 19177.0, 0.0, 15.0, 10.0, 1609.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 2716.0, 3920.0, 0.0, 1970.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 120.0, 0, 0, 0, 0, 38],
        "i": 2,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 27200, "lv": 1}, {"i": 27201, "lv": 110}, {"i": 27202, "lv": 110}, {
            "i": 27203,
            "lv": 110
        }, {"i": 27204, "lv": 110}, {"i": 27208, "lv": 110}, {"i": 27209, "lv": 110}, {"i": 27210, "lv": 110}, {
            "i": 0,
            "lv": 110
        }],
        "x": 6,
        "_id": 10272
    }], [{
        "attr": [10158, 26733.0, 110, 0, 0, 0, 5076.0, 5582.0, 2840.0, 0.0, 0.0, 26733.0, 0.0, 15.0, 1864.0, 10.0, 5.0, 5.0, 200.0, 200.0, 90.0, 90.0, 3926.0, 3915.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 1,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 15800, "lv": 1}, {"i": 15801, "lv": 110}, {"i": 15802, "lv": 110}, {
            "i": 15803,
            "lv": 110
        }, {"i": 15804, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}],
        "x": 6,
        "_id": 10158
    }, {
        "attr": [10214, 19889.0, 110, 0, 0, 0, 4573.0, 1966.0, 6571.0, 0.0, 0.0, 19889.0, 0.0, 15.0, 10.0, 1651.0, 0.0, 3.0, 200.0, 200.0, 90.0, 90.0, 2931.0, 4399.0, 0.0, 0.0, 0.0, 1695.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 1,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 21400, "lv": 1}, {"i": 21401, "lv": 110}, {"i": 21402, "lv": 110}, {
            "i": 21403,
            "lv": 110
        }, {"i": 21404, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}],
        "x": 6,
        "_id": 10214
    }, {
        "attr": [10238, 17673.0, 110, 0, 0, 0, 3854.0, 2234.0, 4806.0, 0.0, 0.0, 17673.0, 0.0, 15.0, 3.0, 1430.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 2925.0, 5762.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 120.0, 0, 0, 0, 0, 38],
        "i": 2,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 23800, "lv": 1}, {"i": 23801, "lv": 110}, {"i": 23802, "lv": 110}, {
            "i": 23803,
            "lv": 110
        }, {"i": 23804, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}, {"i": 0, "lv": 110}],
        "x": 6,
        "_id": 10238
    }, {
        "attr": [10266, 22434.0, 110, 0, 0, 0, 4092.0, 2141.0, 7000.0, 0.0, 0.0, 22434.0, 0.0, 15.0, 3.0, 1192.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 5664.0, 5664.0, 0.0, 0.0, 809.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 200.0, 0, 0, 0, 0, 38],
        "i": 1,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 26600, "lv": 1}, {"i": 26601, "lv": 110}, {"i": 26602, "lv": 110}, {
            "i": 26603,
            "lv": 110
        }, {"i": 26604, "lv": 110}, {"i": 26612, "lv": 110}, {"i": 26616, "lv": 110}, {"i": 0, "lv": 110}, {
            "i": 0,
            "lv": 110
        }],
        "x": 6,
        "_id": 10266
    }, {
        "attr": [10272, 19177.0, 110, 0, 0, 0, 3858.0, 2234.0, 4816.0, 0.0, 0.0, 19177.0, 0.0, 15.0, 10.0, 1609.0, 0.0, 0.0, 200.0, 200.0, 90.0, 90.0, 2716.0, 3920.0, 0.0, 1970.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 30.0, 120.0, 0, 0, 0, 0, 38],
        "i": 2,
        "bqsl": [[{"i": 1001, "lv": 10, "p": 24}, {"i": 1002, "lv": 10, "p": 24}, {
            "i": 1005,
            "lv": 10,
            "p": 24
        }, {"i": 1006, "lv": 10, "p": 24}, {"i": 1007, "lv": 10, "p": 24}], [{"i": 5001, "lv": 10, "p": 24}, {
            "i": 5003,
            "lv": 10,
            "p": 24
        }, {"i": 5004, "lv": 10, "p": 24}, {"i": 5005, "lv": 10, "p": 24}, {"i": 5007, "lv": 10, "p": 24}], [{
            "i": 6001,
            "lv": 10,
            "p": 24
        }, {"i": 6002, "lv": 10, "p": 24}, {"i": 6004, "lv": 10, "p": 24}, {"i": 6005, "lv": 10, "p": 24}, {
            "i": 6007,
            "lv": 10,
            "p": 24
        }]],
        "j": [{"i": 27200, "lv": 1}, {"i": 27201, "lv": 110}, {"i": 27202, "lv": 110}, {
            "i": 27203,
            "lv": 110
        }, {"i": 27204, "lv": 110}, {"i": 27208, "lv": 110}, {"i": 27209, "lv": 110}, {"i": 27210, "lv": 110}, {
            "i": 0,
            "lv": 110
        }],
        "x": 6,
        "_id": 10272
    }]],
    "seed": 53126,
    "gkid": 0,
    "Operation": {
        "cannon": [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "trackUltra": null,
        "autofight": null,
        "distance": [0, -1, -1, -1, -1, -1]
    },
    "bkey": 1
};


function write_data() {
    var str_body = JSON.stringify(body);
    var offset = 0;
    var buf = new Buffer(9000);
    offset += 4;
    buf.writeInt32BE(10016, offset);
    offset += 4;
    buf.writeInt32BE(0, offset);
    offset += 4;
    buf.writeUInt32BE(100, offset);
    offset += 4;
    buf.writeUInt32BE(100, offset);
    offset += 4;
    buf.writeInt32BE(Buffer.byteLength(str_body), offset);
    offset += 4;
    buf.write(str_body, offset);
    offset += Buffer.byteLength(str_body);
    buf.writeInt32BE(offset - 4, 0);
    offset += 4;
    buf.writeInt32BE(0, offset);
    return buf.slice(0, offset);
}

var data = write_data();
var buffers = new Buffer('');

socket.connect(port, host, function () {
    console.log('connecting to: ' + host + ':' + port);
});

socket.on('connect', function () {
    socket.write(data);
});

socket.on('data', function (data) {
    buffers = Buffer.concat([buffers, data]);
    socket.end();
});

socket.on('error', function (err) {
    console.log(arguments);
});

socket.on('close', function () {
    console.log('socket ended');
    buf = '';
    var json = buffers.readInt32BE(12);
    console.log('data:%s', json);
    process.exit(json);
});