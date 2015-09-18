System.config({
    'defaultJSExtensions': true,
    'baseURL': '.',
    'paths': {
        '*': '*.js',
        '*.css': '*.css',
        '*.svg': '*.svg'
    },
    'map': {
        'lodash': 'lib/lodash',
        'mithril': 'lib/mithril/mithril.min',
        'mithril-infinite': 'lib/mithril-infinite/mithril-infinite',
        'verge': 'lib/verge/verge.min',
        'polythene': 'lib/polythene',
        'polythene-theme': 'lib/polythene-theme',
        'j2c': 'lib/j2c/j2c.global.min',
        'css': 'lib/system-css/css',
        'text': 'lib/system-text/text'
    }
});
