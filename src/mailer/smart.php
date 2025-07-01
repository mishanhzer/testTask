<?php 

// $name = $_POST['name'];
// $lastName = $_POST['lastName'];

// $name = htmlspecialchars($name);
// $lastName = htmlspecialchars($lastName);

// $name = urldecode($name);
// $lastName = urldecode($lastName);

// $name = trim($name);
// $lastName = trim($lastName);

// echo $name;
// echo "<br>";
// echo $lastName;

// if (mail("impowka@mail.ru", "Заказ с сайта", "Имя:".$name."Фамилия:".$lastName ,"From: example2@mail.ru \r\n")) {
//   {
//     echo "сообщение успешно отправлено";
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }
// }


// Пример использования mail()
$name = $_POST['name'];
$lastName = $_POST['last name'];
$email = $_POST['email'];
$message = $_POST['message'];

echo $name;
echo "<br>";
echo $lastName;
echo "<br>";
echo $email;
echo "<br>";
echo $message;



// $email = $_POST['email'];
// $message = $_POST['message'];

// require_once('phpmailer/PHPMailerAutoload.php');
// $mail = new PHPMailer;
// $mail->CharSet = 'utf-8';

// // $mail->SMTPDebug = 3;                               // Enable verbose debug output

// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'mishanhzer@gmail.com';                 // Наш логин
// $mail->Password = 'qwsz dtdm llpe iutp';                // Наш пароль от ящика // пароль приложений
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465;                                    // TCP port to connect to
 
// $mail->setFrom('mishanhzer@gmail.com', 'Pulse');   // От кого письмо 
// $mail->addAddress('impowka@mail.ru');     // Add a recipient
// //$mail->addAddress('ellen@example.com');               // Name is optional
// //$mail->addReplyTo('info@example.com', 'Information');
// //$mail->addCC('cc@example.com');
// //$mail->addBCC('bcc@example.com');
// //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
// $mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Данные';
// $mail->Body    = '
// 		Пользователь оставил данные <br> 
// 	Имя: ' . $name . ' <br>
// 	Номер телефона: ' . $phone . '<br>
//   E-mail: ' . $email . '' '<br>
//   Сообщение: ' .$message . '';

// if(!$mail->send()) {
//     return false;
// } else {
//     return true;
// }

?>