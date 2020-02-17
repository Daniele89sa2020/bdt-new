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

//controllo campi vuoti
if(!empty($parametri->email) &&!empty($parametri->password))
{
    $par1 = $parametri->email;
	$par2 = $parametri->password;	
	
	//QUERY INSERT
	//$sql = "INSERT INTO utente (Nome, Cognome) VALUES ('$par1', '$par2')";
	
     $sql = "SELECT * FROM utente WHERE email='$par1' AND password='$par2'";
     $result = mysqli_query($conn, $sql);
     $num_righe=mysqli_num_rows($result);

	//Invio dati Object alert
	if ($num_righe<1) echo json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "Accesso Fallito: Userneme o Password non errati!"));						 
                 else {
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
					 
					
					/*			
					$data_item = array(
						"id" => $id,
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
						"saldo_tempo" => $saldo_tempo);	
					
					echo json_encode(array("status"=>"ok","utente"=>json_encode($data_item)));	*/			 
									 
				}							 
}
else json_encode(array("status"=>"no","header"=>"AVVISO ERRROR","message" => "ERRORE: Inserire tutti i campi!"));	
					 
$conn->close();
?>