/**
 * Created by azder on 2016-04-02.
 */

'use strict'; // ALWAYS


import minimist from 'minimist' ;

import f from './f';


const passed = minimist(process.argv.slice(2));


const envs = () => process.env;
const env = name => process.env[`npm_package_config_${name}`];

const args = () => passed;
const arg = name => passed[name];


const dev = () => 'dev' === process.env.npm_lifecycle_event;


const conf = name => f.either(env(name), arg(name));

export default Object.assign(conf, {
    env,
    envs,
    arg,
    args,
    dev
});

