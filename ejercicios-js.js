function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validarNumeroPositivo(num){
    if(isNumeric(num)){
        if(num >= 0){
            return true;
        }
    }
    return false;
}

function factorial(num){
    if(num < 0){
        return "Error, números negativos no tienen Factorial";
    }
    if(num < 1){
        return 1;
    }
    return num*factorial(num-1);
}

function ulam_aux(num, vec){
    vec.push(num);
    if(num == 1){
        return;
    }else{
        if((num % 2) === 0){
            num /= 2;
        }else{
            num = (num*3)+1;
        }
        ulam_aux(num,vec);
    }
}

function ulam(num){
    var result = [];
    ulam_aux(num,result);
    return result;
}

function conteoRegresivo(num){
        if(num < 0){
        return "No puede ingresar números negativos";
    }else{
        var str = "";
        for (i = num; i > 0; i--){
            for(j = 1;j <= i; j++){
                str += j.toString();
            }
            str += "</br>";

        }
        return str;
    }

}


function main(){
    document.getElementById("factorial-input").addEventListener("onchange", function(){
        if(!validarNumeroPositivo(document.getElementById("factorial-input").value)){
            document.getElementById("factorial-input").className += "has-error";
        }
    });
    document.getElementById("factorial-btn").addEventListener("click", function(){
        var result = factorial(document.getElementById("factorial-input").value);
        document.getElementById("factorial-result").innerHTML = result;
    });

    document.getElementById("ulam-btn").addEventListener("click", function(){

        //var num = document.getElementById("ulam-input").value();
        var num = $('#ulam-input').val();
        document.getElementById("ulam-result").innerHTML = num;
        var result = ulam(num);
        document.getElementById("ulam-result").innerHTML = result.valueOf();
    });

    document.getElementById("conteo-regresivo-btn").addEventListener("click", function(){
        var num = document.getElementById("conteo-regresivo-input").value;
        document.getElementById("conteo-regresivo-result").innerHTML = num;
        var result = conteoRegresivo(num);
        document.getElementById("conteo-regresivo-result").innerHTML = result;
    });

}

document.ready(main());
