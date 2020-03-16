<?php

	// Mail settings
	$to = "chuck@miesfelds.com";
	$subject = "Mfields Website Inquiry";

	if (isset($_POST['reason']) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {

		$content .= "Reason: "     . $_POST["reason"]    . "\r\n";
		$content .= "Name: "     . $_POST["name"]    . "\r\n";
		$content .= "Email: "    . $_POST["email"]   . "\r\n";
		$content .= "Message: "  . "\r\n" . $_POST["message"];

		if (mail($to, $subject, $content, $_POST["email"])) {

			header("Location: http://underdogusa.us/success.html");
		}
		else{
			header("Location: http://underdogusa.us/unsuccessful.html");

		}

		

		/*if (mail($to, $subject, $content, $_POST["email"])) {

			'Location: nextpage.php'

			$result = array(
				"message" => "Thanks for contacting us.",
				"sendstatus" => 1
			);

			echo json_encode($result) . "This thing";

		} else {

			$result = array(
				"message" => "Sorry, something is wrong.",
				"sendstatus" => 0
			);

			echo json_encode($result);

		}*/

	}

?>