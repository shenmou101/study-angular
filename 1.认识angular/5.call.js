//call apply 是function的prototype上的方法 所以实例化的function都可以调用之
function call(self){
    //1.修改函数中的this指针
    //2.让函数执行
}
var obj = {name:'dengjia'};
function say(){
    console.log(this.name)
}
say();
say.call(obj);
console.log(Function.prototype.call);

Function.prototype.mycall = function (thisObj) {
    var source = this.toString();
    source = source.replace(/this/, 'arguments[0]');
    console.log(source);
    eval('('+source+')(thisObj)')
};
say.mycall(obj);