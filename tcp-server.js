const net = require('net');
const fs = require('fs');
const childProcess = require('child_process');

const port = 8124;

let seed = 0;
let workers = [];

const server = net.createServer((client) => {
  client.setEncoding('utf8');

  client.on('data', (data) => {
    console.log(data);
    let req = JSON.parse(data);

    if(req.key === 'worker' && req.method) {
      switch(req.method) {
        case 'start':
          break;
        case 'get':
          break;
        case 'remove':
          break;
      }
    }
  });

  client.on('end', () => {
    console.log(`Client ${client.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}`);
});