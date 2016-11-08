angular.module('djMod').directive('hello',function () {
    return {
        restrict: 'E',
        replace:true,
        template:'<h1>hello</h1>'
    }
});

angular.module('djMod').directive('green',function () {
    return {
        restrict: 'A',
        replace:true,
        link:function (scope,element,attrs) {
            element.css('color','green')
        }
    }
});