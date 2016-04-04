/**
 * Created by azder on 2016-04-04.
 */


'use strict'; // ALWAYS

import collection from '../db';

const tasks = collection('tasks');

export default tasks.insert.bind(tasks);
