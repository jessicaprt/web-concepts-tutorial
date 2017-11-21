//var asyncRequest;
//
//function registerListeners() {
//	var tool;
//	
//	tool = document.getElementById("submit-quiz");
//	tool.addEventListener("click", function() { getContent("result.html"); }, false);
//}
//
//function getContent(url) {
//	try {
//		asyncRequest = new XMLHttpRequest();
//		
//		asyncRequest.addEventListener(
//			"readystatechange", switchTool, false);
//		asyncRequest.open("GET", url, true);
//		asyncRequest.send(null);
//	} catch (exception) {
//		alert("Request Failed!");
//	}
//}
//
//function switchTool() {
//	clearContent();
//	if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
//		clearContent()
//		document.getElementById("result").innerHTML = asyncRequest.responseText;
//	}
//}
//
//function clearContent() {
//	document.getElementById("result").innerHTML = "";
//}
//
//window.addEventListener("load", registerListeners, false);