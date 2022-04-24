const nanoTest  = new (require('nanoTest')).test({
    'progress_bar':false,   
    'debug_print':'short'
});
const $serial = require('./index.js').base;

nanoTest.add(
    'export test',
    {
        'function':$serial.export,
        'options':[]
    },
    'j==',
    {}
);


nanoTest.add(
    'get a default',
    {
        'function':$serial.get,
        'options':[]
    },
    '===',
    0
);


nanoTest.add(
    'get a default',
    {
        'function':$serial.serial,
        'options':[]
    },
    '===',
    1
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.get,
        'options':['n']
    },
    '===',
    0
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.serial,
        'options':['n']
    },
    '===',
    1
);



nanoTest.add(
    'get a default',
    {
        'function':$serial.get,
        'options':[]
    },
    '===',
    2
);


nanoTest.add(
    'get a default',
    {
        'function':$serial.serial,
        'options':[]
    },
    '===',
    3
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.get,
        'options':['n']
    },
    '===',
    2
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.serial,
        'options':['n']
    },
    '===',
    3
);

nanoTest.add(
    'export test',
    {
        'function':$serial.export,
        'options':[]
    },
    'j==',
    {'default':3,'n':3}
);

nanoTest.add(
    'import test',
    {
        'function':$serial.import,
        'options':[{'default':8,'n':7}]
    },
    '===',
    true
);

nanoTest.add(
    'get a default',
    {
        'function':$serial.get,
        'options':[]
    },
    '===',
    9
);


nanoTest.add(
    'get a default',
    {
        'function':$serial.serial,
        'options':[]
    },
    '===',
    10
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.get,
        'options':['n']
    },
    '===',
    8
);


nanoTest.add(
    'get with name',
    {
        'function':$serial.serial,
        'options':['n']
    },
    '===',
    9
);



nanoTest.run();
