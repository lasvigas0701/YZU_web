<?php
error_reporting(0);
require_once('PHPMailerAutoload.php');

$name=$_POST['C_name'];  
$email=$_POST['C_email'];  
$tel=$_POST['C_tel'];  
$message=$_POST['C_message'];  

$mail = new PHPMailer();
//$mail->SMTPDebug = 2;

$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = 465;

$mail->CharSet = "utf-8"; 
$mail->Username = "yzupcroom@gmail.com";
$mail->Password = "pcroominyzu";
//$mail->Form = "g615120@gmail.com";
//$mail->FromName = "劉哲宇";
$mail->Subject ="來自".$name."留言"; //郵件標題  
$mail->Body = "姓名:".$name."<br />信箱:".$email."<br />電話:".$tel."<br />內容:".$message; //郵件內容  

$mail->IsHTML(true);
$mail->AddAddress("$email");

if(!$mail->Send()){
   //echo "寄信發生錯誤：" . $mail->ErrorInfo;
   //如果有錯誤會印出原因
}else{ 
   header("Location: test.php");
}

?>
<!DOCTYPE html>  
<html>  
    <head>  
        <meta http-equiv="content-type" charset="utf-8" />  
        <title>留言給我們</title>  
    </head>  
<body>  
    <form id="form1" name="form1" method="post" action="test.php">  
    <fieldset>  
    <legend>留言給我們</legend>  
    <label>您的大名：</label>  
    <input id="C_name" name="C_name" type="text" />  
    <br />  
  
    <label>您的Email：</label>  
    <input id="C_email" name="C_email" type="text" />  
    <br />  
  
    <label>您的電話號碼：</label>  
    <input id="C_tel" name="C_tel" type="text" />  
    <br />  
  
    <label>您的寶貴意見：</label>  
    <textarea id="C_message" name="C_message"></textarea>  
    <br />  
  
    <input id="submit" name="submit" type="submit" value="確定送出" />  
    </fieldset>  
    </form>  
</body>  
</html> 