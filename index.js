


		
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
		document.getElementById("demo").innerHTML = "Welcome, " + user + ".";
        
	}
	else
	{
		document.getElementById("demo").innerHTML = "Wrong";
	}
}
