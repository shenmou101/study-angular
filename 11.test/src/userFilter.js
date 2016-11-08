angular.module('djMod').filter('userFilter',function () {
    return function (input,len) {
        return input.slice(0,len).toUpperCase()+input.slice(len);
    }
});