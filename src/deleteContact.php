<?php

include('./db-connect.php');

$sql = "DELETE FROM `imenik` WHERE `Phone` = '$_POST[id]';";

$result = $conn->query($sql);

mysqli_close($conn);

echo $result;

?>
