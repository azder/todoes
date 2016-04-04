/**
 * Created by azder on 2016-04-04.
 */


'use strict'; // ALWAYS

import collection from "../db";

// some weird babel bug, couldn't decompose on import
import f from '../f';
const {either, truefn} = f;

const col = collection('tasks');


const all = filter =>
        col
            .chain()
            .where(either(truefn, filter))
            .compoundsort([['priority', true], ['due', false]])
            .data()
    ;

const single = id => col.get(id);
const prioritized = level => col.where(task=>task.priority === level);


export default Object.assign(col, {
    all,
    single,
    prioritized
});
