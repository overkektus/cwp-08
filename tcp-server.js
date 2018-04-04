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
          if(req.interval) {
            let id = getUniqID();
            let file = `./files/${id}.json`;
            let proc = childProcess.spawn('node', ['worker.js', file, req.interval], { detached: true });
            let worker = {
              proc: proc,
              id: id,
              startedOn: Date.now(),
              file: file
            };
            workers.push(worker);
            let res = {
              id: worker.id,
              startedOn: worker.startedOn,
              meta: 'add'
            };
            console.log(res);
            client.write(JSON.stringify(res));
          }
          break;
        case 'get':
          let w = [];
          for(let i = 0; i < workers.length; i++) {
            let num
          }
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

const getUniqID = () => {
  return Date.now() + seed++;
};