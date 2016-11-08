(function () {
    describe('userCtrl',function () {
        var userService;
        //初始化一个模块 因为初始化之后下面才能注入服务
        beforeEach(module('djMod'));//会在window下挂一个module方法 实例化djMod模块
        //如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function (_userService_) {
            userService = _userService_;
        }));
        it('测试title值是否正确',function () {
            expect(userService.name).toEqual('djdjdj');
            console.log(222)
        });
    })
})();