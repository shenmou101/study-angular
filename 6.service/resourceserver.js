var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser').json());
app.get('/', function (req,res) {
    res.sendFile(path.resolve('ngresource.html'));
});
var books = [{id:1,name:'nodejs'}];
//当用户请求/books路径时
app.route('/books').get(function (req,res) {    //查询
    res.send(books);
    //增加一个资源
}).post((req,res) => {  //增加
    //如何接受客户端传来的请求体
    var book = req.body;
    book.id = books[books.length-1].id+1;
    books.push(book);
    res.send(book);   //restful规范：添加一个对象时返回该对象
});

app.route('/books/:id').delete((req,res)=>{     //删除
    books = books.filter((book)=>{
        return book.id != req.params.id;    //返回id不是参数里的id的元素组成的数组
    });
    res.send({});   //restful规范：删除一个对象时返回空对象
}).put((req,res)=>{     //修改
    books = books.map(function (item) {
       if(item.id == req.params.id){
            return req.body;    //请求体就是book对象
       }else{
            return item;
       }
    });
    res.send(req.body);   //restful规范：删除一个对象时返回空对象
});

app.listen(8085);