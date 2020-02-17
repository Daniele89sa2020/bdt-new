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

//QUERY SELECT DB
$sql = "SELECT * FROM utente";
$result = mysqli_query($conn, $sql);
$num_righe=mysqli_num_rows($result);

	 // array di dati
     $data = array();
     $data["records"] = array();

      while($row=mysqli_fetch_assoc($result)){
	    
		$nome=$row['Nome'];
		$cognome=$row['Cognome'];
		
		$data_item = array(
            "nome" => $nome,
            "cognome" => $cognome
        );	
		
		array_push($data["records"], $data_item);
	  } 
        
	 echo json_encode($data);

$conn->close();
?>