

function setPwd()
{
	if (document.getElementById("pwd").value == atob("cXdlcnR5") && document.getElementById("usr").value == atob("SGF5ZGVu") ||
		document.getElementById("pwd").value == atob("MzY0Ng==") && document.getElementById("usr").value == atob("QWRtaW4="))
	{
		var user = document.getElementById("usr").value;
		document.getElementById("demo").innerHTML = "Welcome, " + user + ".";
        
	}
	else
	{
		document.getElementById("demo").innerHTML = "Wrong";

	}
}

