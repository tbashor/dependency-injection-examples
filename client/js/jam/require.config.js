var jam = {
    "packages": [
        {
            "name": "events",
            "location": "/js/jam/events",
            "main": "events.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "events",
            "location": "/js/jam/events",
            "main": "events.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "events",
            "location": "/js/jam/events",
            "main": "events.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}
