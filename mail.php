<?php

        $name=$_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // PREPARE THE BODY OF THE MESSAGE
        $texte = '<html><body>';
        $texte .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
        $texte .= "<tr style='background: #eee;'><td><strong>Nom : </strong> </td><td>" . $name . "</td></tr>";
        $texte .= "<tr><td><strong>Email </strong> </td><td>" . $email . "</td></tr>";
        $texte .= "</table>";
        $texte .= "<strong>Message : </strong>" . $message;
        $texte .= "</body></html>";
 
        $subject = 'Formulaire de contact';
            
        $headers = "From: ". $email ."\r\n";
        //$headers .= "Reply-To: inovea.esgi@gmail.com \r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        if (mail("inovea.esgi@gmail.com", $subject, $texte, $headers)) {
			echo "<script>
			alert('Votre message a bien été envoyé');
			window.location.href='index.html';
			</script>";
        } else {
            echo "<script>
			alert('Une probleme est survenu, votre message n'a pu etre envoyer');
			window.location.href='index.html';
			</script>";
        }


?>		