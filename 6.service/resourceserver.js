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
app.route('/books').get(function (req,res) {
    res.send(books);
    //增加一个资源
}).post((req,res) => {
    //如何接受客户端传来的请求体
    var book = req.body;
    book.id = books[books.length-1]+1;
    books.push(book);
    res.send(book);
});
app.listen(8080);