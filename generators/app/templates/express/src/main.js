const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');
const redis = require('redis');
const createAdapter = require('socket.io-redis');

const CONFIG = require('./config/env');
const events = require('./config/events');
const { Socket, Uploader } = require('tequilajs');

const TestRoomGateway = require('./modules/TestRoom/TestRoom.gateway');

const app = express();
app.use(cors());
app.options('*', cors());

Uploader.serveClient(app);
const httpsServer = http.createServer(app);

const redisClient = redis.createClient({
    host: CONFIG.REDIS_HOST,
    port: CONFIG.REDIS_PORT,
});

events.bind(httpsServer.listen(CONFIG.PORT), CONFIG.PORT);

const socketServer = io(httpsServer, {
    ...CONFIG.IO_OPTIONS,
    adapter: createAdapter({
        pubClient: redisClient,
        subClient: redisClient.duplicate(),
    }),
});

Socket.use(TestRoomGateway);
Socket.init(socketServer);
