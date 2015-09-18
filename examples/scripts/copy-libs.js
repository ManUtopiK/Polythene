'use strict';

require('shelljs/global');

var DESTINATION_DIR = process.argv[2];

var copy = function(name, files) {
    var dest = [DESTINATION_DIR, '/', name, '/'].join('');
    mkdir('-p', dest);
    files.map(function(file) {
        cp(file, dest);
    });
};

var copyDir = function(name, dir) {
    var dest = [DESTINATION_DIR, '/', name].join('');
    mkdir('-p', dest);
    cp('-R', dir, dest);
};

mkdir('-p', DESTINATION_DIR);

copy('systemjs', [
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system.js.map',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/systemjs/dist/system-polyfills.js.map',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js.map'
]);

copy('system-css', [
    'node_modules/system-css/css.js'
]);

copy('system-text', [
    'node_modules/system-text/text.js'
]);

copy('mithril', [
    'node_modules/mithril/mithril.min.js',
    'node_modules/mithril/mithril.min.js.map'
]);

copy('j2c', [
    'node_modules/j2c/dist/j2c.global.min.js'
]);

copy('mithril-infinite', [
    'node_modules/mithril-infinite/lib/mithril-infinite.js',
    'node_modules/mithril-infinite/lib/mithril-infinite.css'
]);

copyDir('lodash', 'node_modules/lodash/');

copy('verge', [
    'node_modules/verge/verge.min.js'
]);


