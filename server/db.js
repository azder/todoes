/**
 * Created by azder on 2016-03-28.
 */

'use strict'; // ALWAYS

//noinspection JSUnresolvedVariable
import Loki from 'lokijs';
import logger from './logger';


const log = logger('[DB]');

// module acts as singleton factory
const db = new Loki('todo');

const tasks = db.addCollection('tasks');


log('created', JSON.stringify(db));


export default Object.assign(db.getCollection.bind(db), {
    tasks
});
