<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include ("accesso_db_new.php");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "{messaggio:\"Connessione fallita riprova più tardi\"}";
    die("Connection failed: " . $conn->connect_error);
}

//recupero dati FORM APP Mobile client
$parametri = json_decode(file_get_contents("php://input"));
$errore="";
              
//Effettuo un validazione dei parametri 
//if(!(isset($parametri->id_candidatura)&&($parametri->id_candidatura!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->id_candidatura))) $errore=$errore."Id non valido <br>";  
//if(!(isset($parametri->stato)&&($parametri->stato!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->stato))) $errore=$errore."Id non valido <br>";              

//controllo che non ci siano errori 
if($errore == "")
{
    $id_candidatura = $parametri->id_candidatura;
	$stato = $parametri->stato;	
	
	//QUERY INSERT
	$sql = "UPDATE partecipare SET stato='".$stato."' WHERE id_candidatura=".$id_candidatura;
	$result = mysqli_query($conn, $sql);

	//Invio dati Object alert
	if ($result) echo json_encode(array("status"=>"ok","header"=>"AVVISO","message" => "Dati inseriti correttamente ".$sql));
            else echo json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: Dati NON inseriti!".$sql));
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: ".$errore));	
					 
$conn->close();
?>