const { Gateway } = require('tequilajs');

const TestRoomListeners = require('./TestRoom.listeners');
const { getHelloSchema } = require('./TestRoom.validations');

const TestRoomGateway = new Gateway('testRoom');

TestRoomGateway.addListener('hello', TestRoomListeners.getHello).validate(
    getHelloSchema,
);

module.exports = TestRoomGateway;
