//Esta funcion se ejecuta cuando incluya... 
$(document).ready(function()
{

//  alert('Entró a la función');
    insertar_registro();
})


function insertar_registro()
{

    //evento click en el boton #btn-register
    $(document).on('click','#btn-register', function()
    {
        var User = $('UserName').val();
        var Email = $('UserEmail').val();

        //validacion por frontend
        if(User == "" || Email== "")
        {
            $('message').html('Llenar los campos en blanco');
        }
        else
        {
            $.ajax(
                {
                    url: 'insertar.php',
                    method: 'post',
                    data:{UName:User, UEmail:Email},   //Etiqueta:
                    success: function(data)
                    {
                        $('#message').html(data);
                    //    $('#Registration').modal('show');
                    //    $('form').trigger('reset');
                    //    Mostrar_registro();
                    }
                }
            )
        }
    })
}
