/*
 *  @Soldy\serialrc\2021.02.07\GPL3
 */
'use strict';
if(typeof  global.theUn1v3rse === 'undefined')
    require('theuniverse');
const $universe = global.theUn1v3rse.controls.interface();


if(!$universe.baseCheck('confrc')){
    const $serialrc = new (require('./serialrc.js')).base();
    $universe.baseAdd('serialrc', $serialrc);
}

exports.base = $universe.baseGet('serialrc');
