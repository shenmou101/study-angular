(function () {
    describe('userCtrl',function () {
        var $scope;
        //初始化一个模块 因为初始化之后下面才能注入服务
        beforeEach(module('djMod'));//会在window下挂一个module方法 实例化djMod模块
        //依赖注入参数并运行函数
        beforeEach(inject(function ($rootScope,$controller) {
            //先生成一个全新的$scope
            $scope = $rootScope.$new();
            //得到userCtrl控制器的函数定义function并自动传入参数并执行此控制器方法，然后初始$scope
            $controller('userCtrl',{$scope:$scope});    //第一个参数是控制器名 第二个是该控制器需要传入的服务
        }));
        it('测试title值是否正确',function () {
            expect($scope.title == 'djdjdj').toBeTruthy();
        });
    })
})();