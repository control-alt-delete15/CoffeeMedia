


		
		function setPwd()
{
			var uname =  [
			"Hayden", 
			"rgrainer",
			"henhen1227_"
			];
		var pwrd = [
			atob("bWRpYS50aw=="), 
			atob("c25vd2ZsYWtl"),
			atob("cGFzc3dvcmQ=")
			];
	if (document.getElementById("pwd").value == pwrd[1] && document.getElementById("usr").value == uname[1] ||
		document.getElementById("pwd").value == pwrd[2] && document.getElementById("usr").value == uname[2] ||
		document.getElementById("pwd").value == pwrd[3] && document.getElementById("usr").value == uname[3] )
	{
		var user = document.getElementById("usr").value;
		 localStorage.username = user;
		localStorage.logged = true;
		 window.location.assign("http://coffeemedia.cf/text")
        
	}
	else
	{
		document.getElementById("demo").innerHTML = "Wrong";
	}
}
