<?php

include('./db-connect.php');

$sql = "SELECT * FROM imenik";

$result = $conn->query($sql);

$dbdata = array();

while($row =  $result->fetch_assoc()) {
  $dbdata[] = $row;
}

mysqli_close($conn);

$result = json_encode($dbdata);

echo $result;

?>
