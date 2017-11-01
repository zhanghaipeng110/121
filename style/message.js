window.onload = function(){
  var oMsg = document.getElementById("msg");
  var oMsg1 = document.getElementById("msg1");
  var oMsg2 = document.getElementById("msg2");
  var oBtn = document.getElementById("btn");
  var oMsg_c = document.getElementById("msg_c");
  var oUl = document.createElement("ul");
  oMsg_c.appendChild(oUl);
  oBtn.onclick = function(){
  var sVal = oMsg.value;
  var sVal1 = oMsg1.value;
  var sVal2 = oMsg2.value;
  var oli = document.createElement("li");
  var oldStyle = oli.style.cssText;
  oli.style.cssText="width:500px;height:100px;border-bottom:2px #000 solid;position: relative;"+oldStyle;
  oli.innerHTML = "<div>名字:</div>"+sVal+"<br>" + "<div>题目:</div>"+sVal1+"<br>" +"<div>内容:</div>"+sVal2 +" <span>×</span>";
  var oli1 = oUl.getElementsByTagName("li");
  if(oli1.length>0){
   oUl.insertBefore(oli,oli1[0]);
  }else{
   oUl.appendChild(oli);
  }
  oMsg.value='';
  oMsg1.value='';
  oMsg2.value='';
   var oSpan = document.getElementsByTagName("span");
   for(var i=0; i<oSpan.length; i++){
    oSpan[i].onclick = function(){
     oUl.removeChild(this.parentNode);
    }
   }
 }
} 
