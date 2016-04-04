/**
 * Created by azder on 2016-03-28.
 */


// if node < 6.0, run with --harmony_rest_parameters flag
// OR
// node ./node_modules/.bin/babel-node --presets=es2015 -- ./server.js


'use strict'; // ALWAYS


import restify from 'restify';

import logger from './server/logger';

import fname2abs from './server/transform/fname';


import conf from './server/conf';
import loadup from "./server/init/loadup";
import routeup from "./server/init/routeup";


const log = logger('[SERVER]');

log('starting with', conf.args(), '...');

const filename = fname2abs(conf('load'));

if (filename) {
    loadup(filename);
}

const server = restify.createServer();

server.use(restify.queryParser());
// server.use(restify.bodyParser());

routeup(server).listen(
    parseInt(conf('port')),
    () => log('serverListen()', 'listening at', server.url)
);


export default server;
