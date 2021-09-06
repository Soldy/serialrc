const nanoTest  = new (require('nanoTest')).test();
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

nanoTest.run();
