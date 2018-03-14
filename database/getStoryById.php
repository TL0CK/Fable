<?php
	// Importing DBConfig.php file.
	include './DBConfig.php';
	
	if (isset($_GET['id']) and !empty($_GET['id'])) 
	{
		try
		{
			$db = new PDO($pdoString, $hostUser, $hostPass);
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
					
			$db->query('SET NAMES UTF8');
			
			$sql = "SELECT title, text FROM story WHERE id = :id";
			$response = $db->prepare($sql);
			$response->bindValue(":id",$_GET['id'], PDO::PARAM_STR);
			$response->execute();
			
			if ($datas = $response->fetch(PDO::FETCH_ASSOC)) 
			{
				$storyTitle = $datas['title'];
				$storyText = $datas['text'];
				echo "Titre: " . $storyTitle . "<br/>";
				echo "Texte: " . $storyText;
			} 
			else
			{
				echo "No story found for this id";
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
		echo "No story Id specified";
	}
	
?>