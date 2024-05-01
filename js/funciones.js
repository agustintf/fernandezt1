//Esta funcion se ejecuta cuando incluya... 
$(document).ready(function()
{
    insertar_registro();
})


function insertar_registro()
{

    //evento click en el boton #btn-register
    $(document).on('click','#btn-register', function()
    {
        var User = $('#nombre').val();
        var Apellido = $('#apellido').val();
        var Email = $('#email').val();
        var Password = $('#password').val();
        var FecNac = $('#fecha_nacimiento').val();
        var Genero = $('#genero').val();
        var Tipo_vehiculo = $('#tipo_vehiculo').val();
        var Repetir = $('#repetir').val();


        //validacion por frontend
        if(User == "" || Email== "")
        {
            $('#mensaje').html('Llenar los campos en blanco');
        }
        else
        {
            $.ajax(
                {
                    url: 'insertar.php',
                    method: 'post',
                    data: {UName:User, UApellido:Apellido, UEmail:Email, UPassword:Password, UFecNac:FecNac, UGenero:Genero, UTipo_vehiculo:Tipo_vehiculo, URepetir:Repetir},   //Etiqueta:
                    success: function(data)
                    {
                        $('#mensaje').html('Se insertó bien');
                    //    $('#mensaje').html(data);
                    //    $('#Registration').modal('show');
                    //    $('form').trigger('reset');
                    //    Mostrar_registro();
                        alert("Entró a la función");
                        alert(data);
                    }
                }
            )
        }
    })
}
