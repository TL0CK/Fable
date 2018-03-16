<?php
	// Importing DBConfig.php file.
	include './DBConfig.php';

	if ((isset($_GET['category']) and !empty($_GET['category'])) and (isset($_GET['length']) and !empty($_GET['length']))) 
	{
		try
		{
			$storiesId = [];
			$db = new PDO($pdoString, $hostUser, $hostPass);
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$db->query('SET NAMES UTF8');
			
			$sql = "SELECT story.id AS storyId 
					FROM story, story_category, category
					WHERE story.length = :length
					AND story.id = story_category.idStory
					AND story_category.idCategory = category.id
					AND category.label = :category";
					
			$response = $db->prepare($sql);
			$response->bindValue(":length", $_GET['length'], PDO::PARAM_STR);
			$response->bindValue(":category", $_GET['category'], PDO::PARAM_STR);
			$response->execute();
			
			while($datas = $response->fetch(PDO::FETCH_ASSOC))
			{
				$storiesId[] = $datas["storyId"];
			}
			
			if(!empty($storiesId))
			{
				echo '{ "storiesId" : [';
				for ($i = 0; $i < sizeof($storiesId); $i++) 
				{
					echo '"' . $storiesId[$i] . '"';
					if($i < sizeof($storiesId) - 1)
					{
						echo ",";
					}
				}
				echo "]}";
			}
			else
			{
				echo "No stories found";
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
		if (!isset($_GET['category']) or empty($_GET['category']))
		{
			echo "No category specified <br/>";
		}
		if (!isset($_GET['length']) or empty($_GET['length']))
		{
			echo "No length specified";
		}
	}

?>