<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "bastien.tiffy@epitech.eu";
    $subject = "Nouveau message de $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
