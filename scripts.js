function validateemail(email){
    var re = /\$+
}

function validacion(){
    var nombre =document.getElementById("nombre").value;
    var apellido =document.getElementById("apellido").value;
    alert(nombre + " " + apellido);
    var email = document.getElementById("email").value;
    //validacion de que el email este completo
    alert(email);

    if(nombre == "" || apellido == "" || email ==""){
        alert("Todos los campos son obligatorios");

    } 
    else{
        alert('Los datos ingresados son correctos');
        return true;
    }
    if(validateemail()){
        alert('Los datos ingresados son correctos');
    }
    else {
        alert('Los datos ingresados son incorrectos');
    }
}

function funcion1() {
  //Toma el valor del input con el id="num" y lo guarda en la variable x
  let x = document.getElementById("num").value;
  // chequea el valor ingesado
  let text;
  if (isNaN(x) || x < 1 || x > 10) // tengo tres condiciones con que una sea verdadera entra al if
  {     // isNaN(x) pregunta si no es un nro
    text = "Ingreso no valido";
  }
  else
  {
    text = "Ingreso valido";
  }
  x = x+1
  document.getElementById("demo").innerHTML = text;
  document.getElementById("numero").innerHTML = x; //convierte a string para mostrarlo
}
