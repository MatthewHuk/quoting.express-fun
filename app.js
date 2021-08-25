const express = require('express');
const cookieParser = require('cookie-parser');
const httpServer = require('http');
const app = express();

// Routes
const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Use routes
app.use('/', indexRouter);

const port = normalizePort(process.env.PORT || '3000');
let server = httpServer.createServer(app);

app.on("ready", () => {
    server.listen(port);
    console.log(`The Quoting fun has started on port ${port}.`);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.emit("ready");

module.exports = server;