<?php

$data = array('nombre'=>'Alguien');
//header("status: 304");
header('Content-Type: application/json');
http_response_code(208);
echo json_encode($data);

?>