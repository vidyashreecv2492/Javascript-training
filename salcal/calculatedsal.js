const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter number',(salary)=>{
    var sal = salary;
    if(sal > 8000){
        console.log("Salary too large");
    }else if(sal < 0){
        console.log("Salary too small");
    }else{
        readline.question('Enter number', (shifts)=>{
            if(shifts<0){
                console.log("Shifts too small");
            }
            else{
                function calculatedSal(sal,shifts){
                    let savings =( sal -((sal * 0.2 )+(sal * 0.3))) + (shifts * (sal * 0.02) );
                    return savings;
                }
            }
            var res = calculatedSal(sal,shifts);
            console.log(res);
            readline.close();
        });
    }
});