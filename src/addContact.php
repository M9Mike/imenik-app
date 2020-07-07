<?php
include('./db-connect.php');

$sql = "INSERT INTO `imenik`(`FirstName`, `LastName`, `Phone`, `Email`) VALUES ('$_POST[name]', '$_POST[lastName]', '$_POST[phone]', '$_POST[email]')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

?>
