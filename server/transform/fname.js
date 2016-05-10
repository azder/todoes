/**
 * Created by azder on 2016-03-29.
 */


'use strict'; // ALWAYS

import path from 'path';

export default (root, filename) =>
    !filename
        ?
        ''
        :
        path.isAbsolute(filename)
            ?
            filename
            :
            path.join(root, filename)
;
