<?php
	// Importing DBConfig.php file.
	include './DBConfig.php';
	
	if (isset($_POST['username']) and !empty($_POST['password'])) 
	{
		try
		{
			$db = new PDO($pdoString, $hostUser, $hostPass);
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
					
			$db->query('SET NAMES UTF8');
			
			$sql = "SELECT id FROM user WHERE username = :username AND password = :password LIMIT 1";
			$response = $db->prepare($sql);
			$response->bindValue(":username",$_POST['username'], PDO::PARAM_STR);
			$response->bindValue(":password",$_POST['password'], PDO::PARAM_STR);
			$response->execute();
			
			if ($datas = $response->fetch(PDO::FETCH_ASSOC)) 
			{
				$json = json_encode($datas);
				echo $json;
			} 
			else
			{
				echo "No user found with this login and password";
			}
			$response->closeCursor();
		}
		catch (Exception $e)
		{
			echo "Can't connect to the database : " . $e->getMessage();
		}
	}
 	else 
	{
		if (!isset($_POST['username']) or empty($_POST['username']))
		{
			echo "No username specified <br/>";
		}
		if (!isset($_POST['password']) or empty($_POST['password']))
		{
			echo "No password specified";
		}
	}
	
?>