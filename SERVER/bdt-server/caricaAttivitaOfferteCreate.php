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
//if(!(isset($parametri->id_utente)&&($parametri->id_utente!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->id_utente))) $errore=$errore."Cognome non valido <br>";             

//controllo che non ci siano errori 
if($errore == "")
{
	
	$id_utente = $parametri->id;
	
	//QUERY SELECT DB
	$sql = "SELECT * FROM attività WHERE id_utente = '".$id_utente."' AND tipo = 'o'";
	$result = mysqli_query($conn, $sql);
	$num_righe=mysqli_num_rows($result);

	// array di dati
    $data = array();
    $data["records"] = array();

    while($row=mysqli_fetch_assoc($result)){
	    
		$id = $row['id'];
		$id_utente = $row['id_utente'];
		$tipo = $row['tipo'];
		$nome = $row['nome'];
		$descrizione = $row['descrizione'];
		$data_inizio = $row['data_inizio'];
		$data_fine = $row['data_fine'];
		$nazione = $row['nazione'];	
		$regione = $row['regione'];	
		$citta = $row['citta'];
		$provincia = $row['provincia'];
		$indirizzo = $row['indirizzo'];
		$cap = $row['cap'];
		$prezzo = $row['prezzo'];
		$attiva = $row['attiva'];
		
		$data_item = array(
            "id" => $id,
			"id_utente" => $id_utente,
			"tipo" => $tipo,
			"nome" => $nome,
			"descrizione" => $descrizione,
			"data_inizio" => $data_inizio,
			"data_fine" => $data_fine,
			"nazione" => $nazione,	
			"regione" => $regione,	
			"citta" => $citta,
			"provincia" => $provincia,
			"indirizzo" => $indirizzo,
			"cap" => $cap,
			"prezzo" => $prezzo,
			"attiva" => $attiva
        );	
		
		array_push($data["records"], $data_item);
	} 
        
	echo json_encode($data);
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: ".$errore));	
					 
$conn->close();
?>