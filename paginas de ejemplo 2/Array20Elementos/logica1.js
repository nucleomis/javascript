    var lista = new Array(20);
    var cont = 0;
    var caja = document.getElementById("elemento");
    Cargar =()=>{
        document.getElementById("cont").innerHTML.value = cont;
        var elemento = document.getElementById("elemento").value;
        if(elemento=="tigre"||elemento=="leopardo"||elemento=="perro"){
            alert("frase no aceptada, ingrese otra");
            document.getElementById("elemento").value = "";
        }
        else if (cont<20&&elemento!="tigre"&&elemento!="leopardo"&&elemento!="perro"){
            lista[cont] = elemento;
            cont +=1;
            document.getElementById("cont").innerHTML = cont+"  "+elemento;
            document.getElementById("elemento").value = "";
        }
        if (cont==20){
            for(i=0; i<lista.length;i++){
                document.getElementById("resultado").innerHTML += "<br>"+ lista[i];
            }
        }
    }