//这是要执行的函数
var greet = function (words) {
    console.log(words.text)
};
//就相当于我们的对象库，里面存放的所有能够注入的对象或服务
var registry = {
    words:{
        text:'hello'
    }
};
//自动注入服务并运行参数里面的函数
var inject = function (func) {
    var source = func.toString();//得到func的源码
    var matchers = source.match(/function\s?\((\w+)\)/);    //matchers是一个数组 即（\w+）匹配结果
    var argnames = matchers.slice(1);
    var args = [];
    for(var i=0;i<argnames.length;i++){
        var argObj = registry[argnames[i]];
        args.push(argObj);

    }
    func.apply(null,args);  //apply的第一个参数是this 此处不需要指定 第二个参数是要传入的参数数组
};

inject(greet);