var lista = new Array(20);
    var cont = 0;
    Cargar =()=>{
        document.getElementById("cont").innerHTML = cont;
        var caja = document.getElementById("elemento");
        var elemento = document.getElementById("elemento").value;
        if (cont<20){
            lista[cont] = elemento;
            cont +=1;
            document.getElementById("cont").innerHTML = cont+"  "+elemento;
            document.getElementById("elemento").value = "";
        }
        lista = lista.sort();
        if (cont==20){
            for(i=0; i<lista.length;i++){
                document.getElementById("resultado").innerHTML += "<br>"+ lista[i];
            }
        }
    }