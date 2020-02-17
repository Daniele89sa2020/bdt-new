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

	$id = $parametri->id;
    $gg = $parametri->giorno;
	$mm=$parametri->mese;
	$aaaa=$parametri->anno;
    $data_nascita = $gg."-".$mm."-".$aaaa;
	$sesso = $parametri->sesso;
	$tel = $parametri->tel;
	

	//QUERY UPDATE
	$sql = "UPDATE utente SET tel='$tel', sesso='$sesso', data_nascita='$data_nascita' WHERE id='$id'";
	$result = mysqli_query($conn, $sql);
	
	

	//Invio dati Object alert
	if (!$result) echo json_encode(array("status"=>"no","header"=>"AVVISO ERRORE","message" => "Si è verifivcato un errore, i dati NON sono stati aggiornati!"));	
            else{
				  $sql = "SELECT * FROM utente WHERE id='$id'";
                  $result = mysqli_query($conn, $sql);
				  $row=mysqli_fetch_assoc($result);
					 
					 $id = $row['id'];
					 $nome=$row['nome'];
					 $cognome=$row['cognome'];
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
					 
					 echo json_encode(array("status"=>"ok",
					                        "header"=>"AVVISO",
											"message" => "I dati sono stati aggiornati!",
						                    "id" => $id,
	                                        "nome"=>$nome,
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
						                    "saldo_tempo" => $saldo_tempo));	 

			}			
					 
$conn->close();
?>