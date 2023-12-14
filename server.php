<?php 

$string = file_get_contents("todos.json");

$list   = json_decode($string, true);

$json   = json_encode($list);

header('Content-Type: application/json');
echo $json

?>