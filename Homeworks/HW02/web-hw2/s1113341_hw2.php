<?php

$name = $_POST['name'];
$email = $_POST['email'];
$plan = $_POST['plan'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$bonus = $_POST['bonus'];

if ($plan == 15000){
	$method = "個人方案(Individaul)";
  } else if ($plan == 28000) {
	$method = "雙人方案(Couple)";
  } else if ($plan == 48000) {
	$method = "團體方案(Group)";
  } else if ($plan == 82000) {
	$method = "頂級方案(Premium)";
  } 

$information = <<<EOF
<h2>[ ] 匯款單</h2>
<table border="1">
	<tr>
		<td>姓名</td>
		<td>$name</td>
		<td>電話</td>
		<td>$phone</td>
        <td>方案</td>
        <td>$method</td>
	</tr>
	
	<tr>
		<td>Email</td>
		<td style="font-family : corier" colspan="5">$email</td>
    </tr>
    <tr>
		<td>商品寄送地址</td>
		<td style="font-family : corier" colspan="5">$address</td>
	</tr>
	
	<tr>
		<td style= "color: red";>額外贊助</td>
		<td style="font-family : corier" colspan="5">$bonus</td>
	</tr>
</table>
EOF;

$sendmail = <<<EOF
<p>感謝您支持我們產品，以下是您的資料</p>
<table border="1">
	<tr>
		<td>姓名</td>
		<td>$name</td>
		<td>電話</td>
		<td>$phone</td>
        <td>方案</td>
        <td>$method</td>
	</tr>
	
	<tr>
		<td>Email</td>
		<td style="font-family : corier" colspan="5">$email</td>
    </tr>
    <tr>
		<td>商品寄送地址</td>
		<td style="font-family : corier" colspan="5">$address</td>
	</tr>
	
	<tr>
		<td style= "color: red";>額外贊助</td>
		<td style="font-family : corier" colspan="5">$bonus</td>
	</tr>
</table>
EOF;

// sql

$host = '140.138.77.70';
$dbuser ='CS380B';
$dbpassword = '1111CS380B';
$dbname = 'CS380B';

// $sql = "SET NAMES UTF8";
$sql = "INSERT INTO s1113341  (name, email, plan, phone, address, bonus)
VALUES ('$name', '$email', '$plan','$phone','$address','$bonus')";


if ( !( $database = mysqli_connect( $host,$dbuser,$dbpassword ) ) )
	die( "Could not connect to database" );
if ( !mysqli_select_db($database,$dbname ) )
	die( "Could not open CS380B database" );
if ( !( $result = mysqli_query($database, $sql) ) )
{
	print( "<p>Could not execute query!</p>" );
}
mysqli_close( $database );


// /*----------show PDF---------*/
require_once('../TCPDF/tcpdf_import.php');
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
$pdf->SetCreator(PDF_CREATOR);
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->SetFont('cid0jp','', 18); 
$pdf->AddPage();

/*----------print PDF end----------*/

$pdf->writeHTML($information);
$pdf->lastPage();
$pdf->Output('/home/s1113341/public_html/web-hw2/pdf/'.$name.'.pdf', 'F');


// /*----------qrcode----------*/ 
include("phpqrcode/qrlib.php");
$tempDir = "qrcode/";
$codeContents = 'http://140.138.77.70/~s1113341/web-hw2/pdf/'.$name.'.pdf';
$fileName = $name.'.png';
$filePath = $tempDir.$fileName; //路徑
if (!file_exists($filePath))        
{
    QRcode::png($codeContents,$filePath);
}

// /*----------send mail----------*/

require("mailler.php");
sentMail($fileName,$email,$sendmail);

$pdf->Output('order.pdf', 'I');

?>

