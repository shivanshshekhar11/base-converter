function base_to_base(base1,base2,num){
    
    if(base1==10){
        return num.toString(base2);
    }

    if(base1==base2){
        return num;
    }

    num10 = 0;
    for(var i = num.length-1; i > -1; i--){
        if(parseInt(num[i])>=base1){
            return "Invalid number according to base input";
        }
        num10 += parseInt(num[i])*Math.pow(base1, num.length-1-i);
    }

    return num10.toString(base2);
}

const num = document.getElementById("num");
const base1 = document.getElementById("base1");
const base2 = document.getElementById("base2");
const result = document.getElementById("resultDisplay");
const button = document.getElementById("submit");

button.addEventListener("click", function(){
    if((base1.value>36)||(base2.value>36)){
        result.textContent = "The base should be between 2 and 36";
        return;
    }

    if((base1.value<2)||(base2.value<2)){
        result.textContent = "The base should be between 2 and 36";
        return;
    }

    if(num.value.toString.length>20){
        result.textContent = "The number is too long";
        return;
    }

    result.textContent = base_to_base(base1.value,base2.value,num.value);
    return;
});