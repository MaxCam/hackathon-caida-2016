var config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "bgplay",
    table: "bgp_routes",
    port:8080,

    zmq_port: 12345,
    zmq_host: "127.0.0.1",

    eventsNames: {
        subscribe: "bgp_subscribe",
        update: "bgp_update",
        dump: "bgp_dumpLine",
        endOfDump: "bgp_endOfDump",
        error: "bgp_error"
    }
};

module.exports = config;
