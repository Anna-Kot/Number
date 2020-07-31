let myMath = {
    pi: 3.1415926535,
    pow : function(number, degree) {
        if (typeof number=='number' && typeof degree=='number') {
            let result=1;
            if (degree > 0 || degree < 0) {
                for (let i=1; i<=Math.abs(degree); i++){
                result=result*number;
                }
                if (degree < 0) {
                    result=1/result;
                    console.log(result)
                }
                else {
                    console.log(result)
                }
            }
            else {
                result=1;
                console.log(result)
            }
        }
        else if (isNaN(number) || isNaN(degree)) {
            console.log('Повинно бути числове значення')
        }
        else {
            console.log('Будь ласка, введіть число')
        }
    },
    abs : function(num) {
        if (typeof num=='number') {
            if(num>=0) {
                num=num
            }
            else {
                num=-num
            }
            console.log(num)
        }
        else if (isNaN(num)) {
            console.log('Повинно бути числове значення')
        }
        else {
            console.log('Будь ласка, введіть число')
        }
    },
    max : function() {
        let max_number=0;
        for (i=0; i<arguments.length; i++) {
            if (typeof arguments[i] =='number') {
                if (arguments[i]>max_number) {
                    max_number=arguments[i]
                }  
            }
            else if (isNaN(arguments[i])) {
                console.log('Повинно бути числове значення')
            }
            else {
                console.log('Будь ласка, введіть число')  
            }
        }
        console.log(max_number); 
    },
    min : function() {
        let min_number=0;
        for (i=0; i<arguments.length; i++) {
            if (typeof arguments[i] =='number') {
                if (arguments[i]<min_number) {
                    min_number=arguments[i]
                }  
            }
            else if (isNaN(arguments[i])) {
                console.log('Повинно бути числове значення')
            }
            else {
                console.log('Будь ласка, введіть число')  
            }
        }   
        console.log(min_number);
    }
}
console.log('pi =', myMath.pi);
myMath.pow(-2,-2);
myMath.abs(-5);
myMath.max(3,7,10,-20,106,275,-500);
myMath.min(3,7,10,-20,106,275,-500);
myMath.max('gfh', 25);





