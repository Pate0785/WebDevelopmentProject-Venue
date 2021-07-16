
function check(form)
{
	if(form.username.value == "admin" && form.pw.value == "123")
	{	
	alert("Welcome to Venue");
	window.open("index.html");
	}
	else{
		alert("Wrong Password");
	}
}
