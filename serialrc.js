/*
 *  @Soldy\serialrc\2021.02.07\GPL3
 */
'use strict';

/*
 * @prototype
 */

const serialBase = function(){
    /*
     * @param {object}
     * @public 
     * @return {boolean}
    */
    this.import = function(data){
        return _import(data);
    };
    /*
     * @public 
     * @return {object}
    */
    this.export = function(){
        return _export();
    };
    /*
     * @param {string}
     * @public 
     * @return {integer}
    */
    this.get = function(name){
        return _get(name);
    };
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
     * @param {object}
     * @public 
     * @return {boolean}
    */
    const _import = function(data){
        for(let name in data)
            if(
                (typeof name === 'string')&&
                (typeof data[name] ==='number') && 
                ((data[name]%1)===0)
            )
                _serials[name.toString()] = parseInt(data[name]);
        return _import(data);
    };
    /*
     * @public 
     * @return {object}
    */
     const _export = function(){
         let out = {};
         for(let name in _serials)
             out[name.toString()] = parseInt(_serials[name]);
         return out;
    };
    /*
     * @param {string}
     * @private
     * @return {integer}
    */
    const _get = function(name){
        if (typeof name !== 'string')
            name = 'default';
        if (typeof _serials[name] === 'undefined')
            return parseInt(_serials[name] = 0);
        _serials[name]++;
        return parseInt(_serials[name]);
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
