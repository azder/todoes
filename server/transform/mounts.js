/**
 * Created by azder on 2016-04-04.
 */


'use strict'; // ALWAYS

import logger from '../logger';

// some weird babel bug, couldn't decompose on import
import f from '../f';
const {compose, map, prop} = f;

export default compose(
    map(spec=>`${prop('method', spec)} ${prop('path', spec)}`),
    map(prop('spec')),
    logger('[MOUNTS]'),
    Object.values
);
