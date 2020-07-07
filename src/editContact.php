<?php

include('./db-connect.php');

$sql = "UPDATE `imenik` SET `FirstName`='$_POST[name]',`LastName`='$_POST[lastName]',`Phone`='$_POST[phone]',`Email`='$_POST[email]' WHERE '$_POST[id]'";

$result = $conn->query($sql);

mysqli_close($conn);

echo $result;

?>
