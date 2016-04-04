/**
 * Created by azder on 2016-03-31.
 */


'use strict'; // ALWAYS

// some weird babel bug, couldn't decompose on import
import f from '../f';
const {prop, map, nav, compose, arrayify, assign} = f;


import logger from '../logger';

const PATH = 'tasks.task';
const log = logger(`[T-TASKS] ${PATH} = `);
const trim = Function.prototype.call.bind(String.prototype.trim);

export default compose(
    map(
        task => assign(
            'text',
            compose(
                trim,
                prop('_')
            )(task),
            prop('$', task)
        )
    ),
    arrayify,
    log,
    nav(PATH)
);



