Fibonacci = () =>{
    var numero = document.getElementById("numero").value;
    for(i=1,fibo = 0;i<=200;i+=fibo, fibo += i){
        if (numero==fibo||numero==i){
            document.getElementById("resultado").innerHTML = "Resultado = el numero '"+numero+"' es fibonacci!";
            break;
        }
    }
    if (i>200){
        document.getElementById("resultado").innerHTML = "Resultado = El numero '"+numero+"' no es un fibonacci";
    }
}