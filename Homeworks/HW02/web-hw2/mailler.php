<?php 

require 'PHPMailer/PHPMailerAutoload.php';
$mailAddr = 's1113341@mail.yzu.edu.tw';
$pwd = 'shark93701';

$mail = new PHPMailer;
$mail->isSMTP();

/*Outlook host is smtp.office365.com*/
$mail->Host = "smtp.office365.com";
$mail->Port = "587";
/*tls true*/
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth   = true;
$mail->Username = $mailAddr;
$mail->Password = $pwd;
$mail->setFrom($mailAddr);
$mail->CharSet = 'UTF-8';
function sentMail($filename,$rcpt,$body)
{
	global $mail;
	$mail->addAddress($rcpt); 
	$mail->addAttachment("qrcode/".$filename);
	$mail->Subject = "匯款通知單";
	$mail->msgHTML($body);
	$mail->send();
}

/* setfrom and username should be always same */

