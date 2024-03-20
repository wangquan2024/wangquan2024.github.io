document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
});
function GET(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}
  
function loadPage()
{
  var xmlhttp;
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	  var json = JSON.parse(this.responseText);
	  if(json.message != null)
	  {
	        alert(json.message);
	        return;
	  }
	  window.location.replace(json.data);
	  return;
    }
  }
  xmlhttp.open("POST","https://lb-bna5y7yl-s9xa7vg2eqhoudkn.clb.ap-shanghai.tencentclb.com/api/geturl.php");
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send("code="+GET('id'));
}
loadPage()