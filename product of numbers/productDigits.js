const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Enter Number',(num)=>{
	var n = num;
	var product = 1;

	function productDigits(n){
		if (n < 0 || n> 32767) {
			return -1;
		}else{
			for(let i of n) {
				product = product * i;
			}
			return product


		}
	}
	var result = productDigits(n);
	if(result == -1){
		console.log("Invalid Input");
	}else{
		console.log(result);
	}
	readline.close();
})