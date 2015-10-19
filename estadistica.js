


function main(){
    var menores40 = 0;
    var entre40y50 = 0;
    var entre50y60 = 0;
    var mas60 = 0;
    var contador = 0;
    var input;
    alert("Variables declaradas");
    while(input != -99){
        contador++;
        input = parseInt(prompt("Ingrese el peso del alumno " + contador + ",para salir ingrese -99"));
        if(input == -99){
            break;
        }else{
            if(input < 40){
                menores40++;
                document.getElementById("menores-40Kg").innerHTML = menores40;
            }else if(input <= 50){
                entre40y50++;
                document.getElementById("entre-40Kg-50Kg").innerHTML = entre40y50;
            }else if(input < 60){
                entre50y60++;
                document.getElementById("entre-50Kg-60Kg").innerHTML = entre50y60;
            }else if(input >= 60){
                mas60++;
                document.getElementById("mas-60Kg").innerHTML = mas60;
            }
        }
    }
}




document.ready(main());