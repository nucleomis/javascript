Multiplo = () =>{
    var num = document.getElementById("numero").value;
    if(num%9==0&&num!=""){
        document.getElementById("resultado").innerHTML = "Resultado = es multiplo de 9 ";
    }
    else if (num%9!=0&&num!=""){
       document.getElementById("resultado").innerHTML = "Resultado = NO es multiplo de 9";
    }
    else{
        alert("ERROR INTENTA NUEVAMENTE");
    }
}