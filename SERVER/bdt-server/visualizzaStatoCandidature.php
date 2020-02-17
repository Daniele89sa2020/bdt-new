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
//if(!(isset($parametri->id_attiva)&&($parametri->id_attiva!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->id_attiva))) $errore=$errore."Id non valido <br>";              

//controllo che non ci siano errori 
if($errore == "")
{
	//echo "parametri ". $parametri;
    $id = $parametri->id_utente;
	$tipo = $parametri->tipo;
	
	
	//QUERY SELECT DB
	$sql = "SELECT * FROM attività,partecipare WHERE partecipare.id_utente = '".$id."' AND tipo = '".$tipo."' AND id_attivita = id";
	//echo $sql;
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
		$stato = $row['stato'];
		
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
			"attiva" => $attiva,
			"stato" => $stato
        );	
		
		array_push($data["records"], $data_item);
	} 
        
	echo json_encode($data);	 
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: ".$errore));	
					 
$conn->close();
?>