// Copyright 2016, EMC, Inc.

'use strict';

var functions = {
    getTasksById: function(client, callback) {
        if (client.identifier == undefined) {
            return callback('invalid task id', undefined);
        } else {
            return callback(undefined, {response: '[{"node":"581a41cd30c24078070f9deb","_status":"succeeded"}]'});
        }
    }
};

var scheduler = {
    scheduler: {
        Scheduler: function() {
            return functions;
        }
    }
};

var mockGrpc = {
    credentials: {
        createInsecure: function() {}
    },
    load: function() {
        return scheduler;
    }
};

module.exports = mockGrpc;