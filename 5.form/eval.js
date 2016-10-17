/**
 * Created by 51621 on 2016/7/31.
 */
var a = 1;
var b = 1;
console.log(eval('a+b'));   //eval可以拿到当前作用域的值

var obj = {
    a:1,
    b:1,
    $eval: function (exp) {
        with(obj){

        }
    }
}