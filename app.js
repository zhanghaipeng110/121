var express=require('express');
var bodyParser=require('body-parser')
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');

app.use(express.static('./public'));
app.use(express.static('./style'));
      
app.get('/',function(req,res){
	res.render('chyuan')
})
app.get('/member',function(req,res){
	res.render('wond')
})
app.get('/wonders',function(req,res){
	res.render('wonders')
})
app.get('/abstract',function(req,res){
	res.render('wonder')
})
app.get('/index',function(req,res){
	res.render('index')
})
app.get('/cheadb',function(req,res){
	res.render('cheadb')
})
app.get('/chat',function(req,res){
	res.render('chat')
})
app.listen(3000)
