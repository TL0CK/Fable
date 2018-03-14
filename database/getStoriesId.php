<?php
	// Importing DBConfig.php file.
	include './DBConfig.php';

	try
	{
		$storiesId = [];
		$db = new PDO($pdoString, $hostUser, $hostPass);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$db->query('SET NAMES UTF8');

		$sql = "SELECT id FROM story";
		$response = $db->prepare($sql);
		$response->execute();

		while($datas = $response->fetch(PDO::FETCH_ASSOC))
        {
            $storiesId[] = $datas['id'];
        }

		foreach($storiesId as $storyId)
		{
			echo "storyId : <a href='/edsa-fable/database/getStoryById.php?id=" . $storyId . "'>" . $storyId . "</a><br/>";
		}

		$response->closeCursor();
	}
	catch (Exception $e)
	{
		echo "Can't connect to the database : " . $e->getMessage();
	}
?>
