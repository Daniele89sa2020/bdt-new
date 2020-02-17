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

//controllo che non ci siano errori 

	
	$id_utente = $parametri->id_utente;
	$tipo = $parametri->tipo;
    $nome = $parametri->categoria;
	$descrizione = $parametri->descrizione;
	
	
    $gg_i = $parametri->giorno_i;
	$mm_i=$parametri->mese_i;
	$aaaa_i=$parametri->anno_i;
    $data_inizio = $gg_i."-".$mm_i."-".$aaaa_i;
	
		
    $gg_f = $parametri->giorno_f;
	$mm_f=$parametri->mese_f;
	$aaaa_f=$parametri->anno_f;
    $data_fine = $gg_f."-".$mm_f."-".$aaaa_f;
	
	$provincia = $parametri->provincia;
	
	$nazione ="ITALIA";	
	$regione ="";	
	$citta = $parametri->citta;
	$indirizzo = $parametri->indirizzo;
	$cap = $parametri->cap;
	$prezzo = $parametri->prezzo;
	
	//QUERY INSERT
	$sql = "INSERT INTO attività ( id_utente, tipo, nome, descrizione, data_inizio, data_fine, nazione, provincia, regione, citta, indirizzo, cap, prezzo,attiva) VALUES ( '$id_utente', '$tipo', '$nome', '$descrizione', '$data_inizio', '$data_fine', '$nazione', '$provincia', '$regione', '$citta', '$indirizzo', '$cap', '$prezzo','si')";
    $result = mysqli_query($conn, $sql);
	
	//Invio dati Object alert
	if ($result) echo json_encode(array("status"=>"ok","header"=>"AVVISO","message" => "Dati inseriti correttamente"));
            else echo json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: Dati NON inseriti! '$sql'"));	 

					 
$conn->close();
?>