<?php
$tosend = "info@escts.ru"; //To:
$subject = "ЕСЦТС - ".$_POST['subject']; //Subject:

/*if (isset ($_POST['phone'])) {
	$from_name = $_POST['phone']; 
} else {*/
	$from_name = "ЕСЦТС ОПСПП"; //From:
//};
$from_email = "email@email.com"; //From:
////NO EDIT
function sendmail($to, $subject, $message, $from_name, $from_email, $files = array()) {
	/*
		$files = array(
			array(
				'name' => 'file.txt',
				'path' => './dir/file.tmp'
			)
		);
	*/

	$boundary = "---";
	$headers = "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";
	$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"";
	$body = "--{$boundary}\r\n";
	$body .= "Content-type: text/html; charset='utf-8'\r\n";
	$body .= "Content-Transfer-Encoding: quoted-printablenn";
	$body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode('letter.html')."?=\r\n\r\n";
	$body .= $message."\r\n";
	$body .= "--{$boundary}\n";
	foreach($files as $file) {
		$content = file_get_contents($file['path']);
		$body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($file['name'])."?=\r\n";
		$body .= "Content-Transfer-Encoding: base64\r\n";
		$body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($file['name'])."?=\r\n\r\n";
		$body .= chunk_split(base64_encode($content))."\r\n";
		$body .= "--{$boundary}--\r\n";
	}
	return mail($to, "=?UTF-8?B?".base64_encode($subject)."?=", $body, $headers);
}
if(!isset($_POST['act'])) {
	exit();
}
switch($_POST['act']) {
	case 'sender':
		if(empty($_POST['name']) || empty($_POST['phone'])) {
			exit();
		}
		if (isset ($_POST['name'])) {
			$name = $_POST['name'];
		} else {
			$name = "Форма без имени";
		}
		$phone = $_POST['phone'];
		$subject2 = $_POST['subject'];

		$msg  = "<p><strong>{$subject2}</strong></p>\r\n";
		$msg .= "<p><strong>Имя:</strong> {$name}</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> {$phone}</p>\r\n";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}
	break;
	case 'kp':
		if(empty($_POST['name']) || empty($_POST['phone'])) {
			exit();
		}
		$s1 = $_POST['s1'];
		$s2 = $_POST['s2'];
		$s3 = $_POST['s3'];
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$company = $_POST['company'];

		$msg  = "<p><strong>Рассчитайте стоимость сертификации ISO для Вашей организации самостоятельно в 3 простых шага</strong></p>\r\n";
		$msg .= "<p><strong>Имя:</strong> {$name}</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> {$phone}</p>\r\n";
		$msg .= "<p><strong>Email:</strong> {$email}</p>\r\n";
		$msg .= "<p><strong>Компания:</strong> {$company}</p>\r\n";
		$msg .= "<p><strong>КАКОЙ СТАНДАРТ ВАС ИНТЕРЕСУЕТ:</strong> {$s1}</p>\r\n";
		$msg .= "<p><strong>ДЛЯ КАКИХ ЦЕЛЕЙ ТРЕБУЕТСЯ СЕРТИФИКАЦИЯ:</strong> {$s2}</p>\r\n";
		$msg .= "<p><strong>КАКАЯ СТЕПЕНЬ ВНЕДРЕНИЯ ТРЕБУЕТСЯ:</strong> {$s3}</p>\r\n";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}
	break;
	case 'email':
		if(empty($_POST['email'])) {
			exit();
		}
		$email = $_POST['email'];

		$msg  = "<p><strong>Получить КП и зафиксировать условия</strong></p>\r\n";
		$msg .= "<p><strong>Email:</strong> {$email}</p>\r\n";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";

		if(mail($tosend, "=?UTF-8?B?".base64_encode($subject)."?=", $msg, $headers)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}
	break;
	case 'q':
		if(empty($_POST['name']) || empty($_POST['phone'])) {
			exit();
		}
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$text = $_POST['text'];
		$files = array();
		if(!empty($_FILES['attach']['name'])) {
			$files[] = array(
				'name' => $_FILES['attach']['name'],
				'path' => $_FILES['attach']['tmp_name']
			);
		}

		$msg  = "<p><strong>Задать вопрос эксперту</strong></p>\r\n";
		$msg .= "<p><strong>Имя:</strong> {$name}</p>\r\n";
		$msg .= "<p><strong>Телефон:</strong> {$phone}</p>\r\n";
		$msg .= "<p><strong>Email:</strong> {$email}</p>\r\n";
		$msg .= "<p><strong>Вопрос:</strong> ".nl2br($text)."</p>\r\n";

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
		$headers .= "From: =?UTF-8?B?".base64_encode($from_name)."?= <{$from_email}>\r\n";

		if(sendmail($tosend, $subject, $msg, $from_name, $from_email, $files)) {
			echo json_encode(array('result' => 'ok'));
		} else {
			echo json_encode(array('result' => 'fail'));
		}
	break;
	default: exit();
}
?>