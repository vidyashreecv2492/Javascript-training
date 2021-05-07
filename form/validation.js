function validation(){
	var uname = document.getElementById("uname").value;
	var pwrd = document.getElementById("pwrd").value;
	var pwrd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.])/;
	var uname_exp = /^[A-Za-z]+$/;
	if(uname == ''){
		alert('Enter username');
	}
	else if(pwrd == ''){
		alert('Enter password');
	}
	else if(!uname_exp.test(uname)){
		alert('Invalid name');
	}
	else if(!pwrd_expression.test(pwrd)){
		alert('Enter valid password');
	}
	else{
		alert('Success');
	}
}