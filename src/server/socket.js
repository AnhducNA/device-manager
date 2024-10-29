const net = require("node:net");

const PORT_SOCKET_IOT = process.env.PORT_SOCKET_IOT || 6666;

const listen = () => {
  net
    .createServer(() => {
      console.log("IOT device connected via TCP socket");
    })
    .listen(PORT_SOCKET_IOT, () => {
      console.log(`Express is running on port ${PORT_SOCKET_IOT}`);
    });
};

module.exports = { listen };
