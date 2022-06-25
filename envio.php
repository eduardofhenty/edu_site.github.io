<?php
$nome= $_POST['nome'];
$email = $_POST['email'];
$mensagem= $_POST['message'];
$formcontent="Mensagem enviada por: $name n Texto: $message";
$recipient = "eduardofhenty@gmail.com";
$subject = "Formulário de contato";
$mailheader = "De: $email rn";
mail($recipient, $subject, $formcontent, $mailheader) or die("Erro!");
echo "Obrigado por entrar em contato!";
?>