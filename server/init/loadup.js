/**
 * Created by azder on 2016-04-04.
 */


'use strict'; // ALWAYS

import {readFileSync} from 'fs' ;

// some weird babel bug, couldn't decompose on import
import f from '../f';
const {flow, tap, ncurry, compose} = f;

import logger from '../logger';

import xtasks from '../extract/xml-tasks' ;
import json2tasks from '../transform/json2tasks';
import l0tasks from '../load/db-tasks';


const log = logger('[LOADUP]');
const log2 = ncurry(2, log);


// sync load, only do this rarely, like when starting up
export default filename =>
    xtasks(
        readFileSync(tap(log2(`extracting from`), filename), 'utf8')
    )

        .then(
            flow(
                tap(compose(log2('extracted'), JSON.stringify)),
                json2tasks,
                tap(log2('transformed')),
                l0tasks,
                tap(log2('loaded'))
            )
        )

        .catch(err => {
            log(`error loading ${filename}`, {err}, 'exiting app with', ()=>process.exit(conf.dev() ? 0 : 1), '...');
        });
