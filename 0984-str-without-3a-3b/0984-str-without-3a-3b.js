/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    
    let string = "";

    let counterA = 0;
    let counterB = 0;

    while(a > 0 || b > 0){

        if(a > b){
            string = string + "a";
            counterA++;
            a--;
            if(counterA == 2 && b > 0){
                string = string + "b";
                b--;
                counterA = 0;
            }
        }
        else{
            string = string + "b";
            counterB++;
            b--;
            if(counterB == 2 && a > 0){
                string = string + "a";
                a--;
                counterB = 0;
            }
        }
    }

    return string;
};

let result = strWithout3a3b(4, 10);

console.log(result);