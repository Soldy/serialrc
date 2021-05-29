/*
 *  @Soldy\tickrc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */

const serialBase = function(){
    /*
     * @param {string}
     * @public 
     * @return {integer}
    */
    this.serial = function(name){
        return _get(name);
    };
    /*
     * @param {string}
     * @public 
     * @return {string}
    */
    this.id = function(name){
        return _id(name);
    };
    /*
     * var {string}
     */
    const _time_string = (Date.now()).toString(32);
    /*
     * var {object}
     */
    const _serials = {};
    /*
     * @param {string}
     * @private
     * @return {integer}
    */
    const _get = function(name){
        if (typeof name === 'string')
            name = 'default';
        if (typeof _serials[name] === 'undefined')
            return _serials[name] = 0;
        return parseInt(_serials[name]++);
    };
    /*
     * @param {string}
     * @private
     * @return {string}
    */
    const _id = function(name){
        return (
            _get(name).toString(32)+
            '-'+
            _time_string
        );
    };
};


exports.base = serialBase;
