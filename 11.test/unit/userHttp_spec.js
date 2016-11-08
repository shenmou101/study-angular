(function () {
    describe('userCtrl',function () {
        var $http;
        var $httpBackend;
        //初始化一个模块 因为初始化之后下面才能注入服务
        beforeEach(module('djMod'));//会在window下挂一个module方法 实例化djMod模块
        //如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function (_$http_,_$httpBackend_) {
            $http = _$http_;
            $httpBackend = _$httpBackend_;
            _$httpBackend_.when('GET','/users').response({name:'zfpx'})
        }));
        it('测试title值是否正确',function () {
            $http.get('/users').success(function (data) {
                expect(data.name).toEqual('djdj')
            });
            //模拟后台返回数据 这样success
            $httpBackend.flush();
        });
    })
})();