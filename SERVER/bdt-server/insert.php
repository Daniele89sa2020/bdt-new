<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include ("accesso_db.php");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "{messaggio:\"Connessione fallita riprova più tardi\"}";
    die("Connection failed: " . $conn->connect_error);
}


//recupero dati FORM APP Mobile client
$parametri = json_decode(file_get_contents("php://input"));

//controllo campi vuoti
if(!empty($parametri->nome) &&!empty($parametri->cognome))
{
    $par1 = $parametri->nome;
	$par2 = $parametri->cognome;	
	
	//QUERY INSERT
	$sql = "INSERT INTO utente (Nome, Cognome) VALUES ('$par1', '$par2')";
	$result = mysqli_query($conn, $sql);

	//Invio dati Object alert
	if ($result) echo json_encode(array("header"=>"AVVISO","message" => "Dati inseriti correttamente nel Database!"));
            else echo json_encode(array("header"=>"AVVISO ERRROR","message" => "ERRORE: Dati NON inseriti!"));
}

$conn->close();
?>