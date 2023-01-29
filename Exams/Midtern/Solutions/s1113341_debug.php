<?php

require_once('./tcpdf/tcpdf_import.php');
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);
$pdf->SetFont('cid0jp','', 18); 
$pdf->AddPage();

/*---------------- Your Code Start -----------------*/
$style = array(
    'position' => '',
    'align' => 'C',
    'stretch' => false,
    'fitwidth' => true,
    'cellfitalign' => '',
    'border' => true,
    'hpadding' => 'auto',
    'vpadding' => 'auto',
    'fgcolor' => array(0,0,0),
    'bgcolor' => false, 
    'text' => true,
    'font' => 'helvetica',
    'fontsize' => 8,
    'stretchtext' => 4
);

$sid = $_POST['sid'];
$name = $_POST['n1'];
$c1 = $_POST['c1'];
$c2 = $_POST['c2'];
$c3 = $_POST['c3'];
$d1 = $_POST['d1'];
$d2 = $_POST['d2'];
$d3 = $_POST['d3'];

$html = <<<EOF
		<table cellspacing="0" cellpadding="1" border="1" width=100>
			<tr>
				<td>選課單</td>
			</tr>
			<tr>
				<td>姓名:</td>
				<td>$name</td>
				<td>學號:</td>
				<td>$sid</td>
			</tr>			
			<tr>
			    <td>課程1$c1 $d1</td>
			</tr>   
			<tr>
			    <td>課程2:$c2 $d2</td>
			</tr>   
			<tr>
			    <td>課程3:$c3 $d3</td>
			</tr>   

		</table>
EOF;
/*---------------- Your Code End -------------------*/

$pdf->writeHTML($html);
$pdf->lastPage();
$pdf->Output($sid.'_order.pdf', 'I');
