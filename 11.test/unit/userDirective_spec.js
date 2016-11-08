(function () {
    describe('userDirective',function () {
        var $compile;
        var $rootScope;
        //初始化一个模块 因为初始化之后下面才能注入服务
        beforeEach(module('djMod'));//会在window下挂一个module方法 实例化djMod模块
        //如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function (_$compile_,_$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('测试userDirective值是否正确',function () {
            //编译包含指令的模板
            var element = $compile('<hello></hello>')($rootScope);  //element是一个jquery
            expect(element.html()).toEqual('hello');

            var element2 = $compile('<div green>hello</div>')($rootScope);  //element是一个jquery
            expect(element2.css('color')).toEqual('green');
        });
    })
})();