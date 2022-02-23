<?php
    $destinatario = "josemanuel180601@gmail.com";
    // Lugar de destino del mensaje.

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['asunto'];
    $message = $_POST['message'];

    $header = 'Enviado desde tu página web, Manuel.';
    
    $mensajeCompleto = 'Correo: ' . $email. '/n Asunto' . $asunto. '/n' $message . '/n Atentamente' . $nombre . $apellido '/n ';

    mail($destinatario, $asunto, $mensajeCompleto, $header);

    echo "<script>alert('correo enviado exitosamente')</script>"
    echo "<script> setTiemout(\"location.href ='../index.html'\",1000)</script>"
?>