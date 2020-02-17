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
if(!(isset($parametri->nome)&&($parametri->nome!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->nome))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->cognome)&&($parametri->cognome!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->cognome))) $errore=$errore."Cognome non valido <br>";
if(!(isset($parametri->data_nascita)&&($parametri->data_nascita!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->data_nascita))) $errore=$errore."Data di nascita non valido <br>";
if(!(isset($parametri->email)&&($parametri->email!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->email))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->tel)&&($parametri->tel!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->tel))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->sesso)&&($parametri->sesso!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->sesso))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->titolo_studi)&&($parametri->titolo_studi!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->titolo_studi))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->esperienze_lavorative)&&($parametri->esperienze_lavorative!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->esperienze_lavorative))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->conoscenze_linguistiche)&&($parametri->conoscenze_linguistiche!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->conoscenze_linguistiche))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->competenze)&&($parametri->competenze!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->competenze))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->password)&&($parametri->password!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->password))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->cap)&&($parametri->cap!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->cap))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->citta)&&($parametri->citta!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->citta))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->provincia)&&($parametri->provincia!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->provincia))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->indirizzo)&&($parametri->indirizzo!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->indirizzo))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->regione)&&($parametri->regione!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->regione))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->nazione)&&($parametri->nazione!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->nazione))) $errore=$errore."Nome non valido <br>";
if(!(isset($parametri->saldo_tempo)&&($parametri->saldo_tempo!="")))if (!(preg_match("/[a-z]+\w*/i", $parametri->saldo_tempo))) $errore=$errore."Nome non valido <br>";
              

//controllo che non ci siano errori 
if($errore == "")
{
	$id = $parametri->id;
    $nome = $parametri->nome;
	$cognome = $parametri->cognome;
	$data_nascita = $parametri->data_nascita;
	$email = $parametri->email;
	$tel = $parametri->tel;
	$sesso = $parametri->sesso;
	$titolo_studi = $parametri->titolo_studi;
	$esperienze_lavorative = $parametri->esperienze_lavorative;
	$conoscenze_linguistiche = $parametri->conoscenze_linguistiche;
	$competenze = $parametri->competenze;
	$password = $parametri->password;
	$cap = $parametri->cap;
	$citta = $parametri->citta;
	$provincia = $parametri->provincia;
	$indirizzo = $parametri->indirizzo;
	$regione = $parametri->regione;	
	$nazione = $parametri->nazione;	
	$saldo_tempo = $parametri->saldo_tempo;	
	
	
	//QUERY UPDATE
	//" partecipare  stato='".$stato."' WHERE id=".$id_candidatura;
	//$sql = "UPDATE utente SET (nome, cognome, data_nascita, email, tel, sesso, titolo_studio, esperienze_lavorative, conoscenze_linguistiche, competenze, password, cap, citta, provincia, indirizzo, regione, nazione, saldo_tempo) VALUES ('$nome', '$cognome', '$data_nascita', '$email', '$tel', '$sesso', '$titolo_studio', '$esperienze_lavorative', '$conoscenze_linguistiche', '$ompetenze', '$password', '$cap', '$citta', '$provincia', '$indirizzo', '$regione', '$nazione', '$saldo_tempo')";
	$result = mysqli_query($conn, $sql);

	//Invio dati Object alert
	if ($result) echo json_encode(array("status"=>"ok","header"=>"AVVISO","message" => "Dati inseriti correttamente"));
            else echo json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: Dati NON inseriti!"));	 
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: ".$errore));	
					 
$conn->close();
?>