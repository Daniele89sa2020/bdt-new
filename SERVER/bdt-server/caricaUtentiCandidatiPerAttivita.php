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
    $id = $parametri->id_attivita;
	
	
	//QUERY SELECT DB
	$sql = "SELECT * FROM utente,partecipare WHERE id_utente = id AND id_attivita = '".$id."' ";
	//echo $sql;
	$result = mysqli_query($conn, $sql);
	$num_righe=mysqli_num_rows($result);

	// array di dati
    $data = array();
    $data["records"] = array();

    while($row=mysqli_fetch_assoc($result)){
	    
		$id = $row['id'];
		$id_utente = $row['id_utente'];
		$id_candidatura = $row['id_candidatura'];
		$stato = $row['stato'];
		$nome = $row['nome'];
		$cognome = $row['cognome'];
		$data_nascita = $row['data_nascita'];
		$email = $row['email'];
		$tel = $row['tel'];	
		$sesso = $row['sesso'];	
		$titolo_studio = $row['titolo_studio'];
		$esperienze_lavorative = $row['esperienze_lavorative'];
		$conoscenze_linguistiche = $row['conoscenze_linguistiche'];
		$competenze = $row['competenze'];
		$password = $row['password'];
		$cap = $row['cap'];
		$citta = $row['citta'];
		$provincia = $row['provincia'];	
		$indirizzo = $row['indirizzo'];	
		$regione = $row['regione'];
		$nazione = $row['nazione'];
		$saldo_tempo = $row['saldo_tempo'];
		
		$data_item = array(
            "id" => $id,
			"id_candidatura" => $id_candidatura,
			"stato" => $stato,
			"nome" => $nome,
			"cognome" => $cognome,
			"data_nascita" => $data_nascita,
			"email" => $email,
			"tel" => $tel,
			"sesso" => $sesso,
			"titolo_studio" => $titolo_studio,	
			"esperienze_lavorative" => $esperienze_lavorative,	
			"conoscenze_linguistiche" => $conoscenze_linguistiche,
			"competenze" => $competenze,
			"password" => $password,
			"cap" => $cap,
			"citta" => $citta,	
			"provincia" => $provincia,	
			"indirizzo" => $indirizzo,
			"regione" => $regione,
			"nazione" => $nazione,
			"saldo_tempo" => $saldo_tempo,
			"id_utente" => $id_utente
        );	
		
		array_push($data["records"], $data_item);
	} 
        
	echo json_encode($data);	 
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: ".$errore));	
					 
$conn->close();
?>