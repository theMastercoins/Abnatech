
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'] ?? 'Non spécifié';
    $email = $_POST['email'] ?? 'Non spécifié';
    $subject = $_POST['subject'] ?? 'Message depuis le site ABNA TECH';
    $message = $_POST['message'] ?? 'Aucun message';
    
    // Set recipient email
    $to = "contact@abnatech.ma";
    
    // Create email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Compose email message with HTML formatting
    $email_content = "
    <html>
    <head>
        <title>Nouveau message de contact</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { padding: 20px; }
            .header { background-color: #004b87; color: white; padding: 10px; }
            .content { padding: 15px; }
            .info { margin-bottom: 10px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Nouveau message de contact - ABNA TECH</h2>
            </div>
            <div class='content'>
                <div class='info'><strong>Nom:</strong> $name</div>
                <div class='info'><strong>Email:</strong> $email</div>
                <div class='info'><strong>Sujet:</strong> $subject</div>
                <div class='info'><strong>Message:</strong></div>
                <div class='message'>".nl2br(htmlspecialchars($message))."</div>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Try to send email
    if (mail($to, "Contact: $subject", $email_content, $headers)) {
        $response = ['status' => 'success', 'message' => 'Votre message a été envoyé avec succès!'];
    } else {
        $response = ['status' => 'error', 'message' => "Échec de l'envoi du message. Veuillez réessayer."];
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// If not a POST request, redirect to the contact page
header("Location: contact.html");
exit;
?>
