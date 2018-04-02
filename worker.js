const http = require('http');
const net = require('net');
const buf = require('buffer');

const port = 3000;
const tcpPort = 8124;

const connection = new net.Socket();

const handlers = {
  '/workers': workers,
  '/workers/add': add,
  '/workers/remove': remove
};

function workers(req, res, payload, cb) {

};

function add(req, res, payload, cb) {

};

function remove(req, res, payload, cb) {

};
