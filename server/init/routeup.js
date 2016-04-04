/**
 * Created by azder on 2016-04-04.
 */


'use strict'; // ALWAYS

import f from '../f';

import dbtasks from '../extract/db-tasks';

import mounts2list from '../transform/mounts';

export default server => {

    server.get('/', (req, res) =>
        res.send(mounts2list(server.router.mounts))
    );

    server.get('/task/:id/', (req, res) =>
        res.send(dbtasks.single(f.nav('params.id', req)))
    );

    server.get('/tasks/', (req, res) =>
        res.send(dbtasks.all())
    );

    server.get('/tasks/priority/:level', (req, res)=>
        res.send(dbtasks.prioritized(f.nav('params.level', req)))
    );

    return server;

}
