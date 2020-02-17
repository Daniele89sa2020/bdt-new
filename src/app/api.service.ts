import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  login(value){
    return this.http.post('http://localhost/bdt-server/login.php',JSON.stringify(value));
  }

  registrazione(value){
    return this.http.post('http://localhost/bdt-server/registrazione.php',JSON.stringify(value));
  }

  modificaDatiProfilo(value,id){
    value.id=id;
    return this.http.post('http://localhost/bdt-server/modificaDatiProfilo.php',JSON.stringify(value));
  }


  caricaCandidati(value){
    return this.http.post('http://localhost/bdt-server/caricaUtentiCandidatiPerAttivita.php',JSON.stringify(value));
  }

  creaAttivita(value){
    return this.http.post('http://localhost/bdt-server/creaAttivita.php',JSON.stringify(value));
  }

  caricaUtente(value){
    return this.http.post('http://localhost/bdt-server/caricaUtente.php',JSON.stringify(value));
  }

  caricaAttivita(value){
    return this.http.post('http://localhost/bdt-server/caricaAttivita.php',JSON.stringify(value));
  }

  caricaAttivitaOfferteCreate(value){
    return this.http.post('http://localhost/bdt-server/caricaAttivitaOfferteCreate.php',JSON.stringify(value));
  }

  caricaAttivitaRichiesteCreate(value){
    return this.http.post('http://localhost/bdt-server/caricaAttivitaRichiesteCreate.php',JSON.stringify(value));
  }

  cambiaStatoCandidatura(value){
    return this.http.post('http://localhost/bdt-server/cambiaStatoCandidatura.php',JSON.stringify(value));
  }

  candidaUtentePerAttivita(value){
    return this.http.post('http://localhost/bdt-server/candidaUtentePerAttivita.php',JSON.stringify(value));
  }

  caricaUtentiCandidatiPerAttivita(value){
    return this.http.post('http://localhost/bdt-server/caricaUtentiCandidatiPerAttivita.php',JSON.stringify(value));
  }

  modificaDatiUtente(value){
    return this.http.post('http://localhost/bdt-server/modificaDatiUtente.php',JSON.stringify(value));
  }

  ricercaAttivitaOfferte(value){
    return this.http.post('http://localhost/bdt-server/ricercaAttivitaOfferte.php',JSON.stringify(value));
  }

  ricercaAttivitaRichieste(value){
    return this.http.post('http://localhost/bdt-server/ricercaAttivitaRichieste.php',JSON.stringify(value));
  }

/*
 
login(value){
  return this.http.post('http://www.cd-software.it/bdt-server/login.php',JSON.stringify(value));

registrazione(value){
  return this.http.post('http://www.cd-software.it/bdt-server/registrazione.php',JSON.stringify(value));
}

modificaDatiProfilo(value,id){
  value.id=id;
  return this.http.post('http://www.cd-software.it/modificaDatiProfilo.php',JSON.stringify(value));
}


caricaCandidati(value){
  return this.http.post('http://www.cd-software.it/caricaUtentiCandidatiPerAttivita.php',JSON.stringify(value));
}

creaAttivita(value){
  return this.http.post('http://www.cd-software.it/bdt-server/creaAttivita.php',JSON.stringify(value));
}

caricaUtente(value){
  return this.http.post('http://www.cd-software.it/bdt-server/caricaUtente.php',JSON.stringify(value));
}

caricaAttivita(value){
  return this.http.post('http://www.cd-software.it/bdt-server/caricaAttivita.php',JSON.stringify(value));
}

caricaAttivitaOfferteCreate(value){
  return this.http.post('http://www.cd-software.it/bdt-server/caricaAttivitaOfferteCreate.php',JSON.stringify(value));
}

caricaAttivitaRichiesteCreate(value){
  return this.http.post('hhttp://www.cd-software.it/bdt-server/caricaAttivitaRichiesteCreate.php',JSON.stringify(value));
}

cambiaStatoCandidatura(value){
  return this.http.post('http://www.cd-software.it/bdt-server/cambiaStatoCandidatura.php',JSON.stringify(value));
}

candidaUtentePerAttivita(value){
  return this.http.post('http://www.cd-software.it/bdt-server/candidaUtentePerAttivita.php',JSON.stringify(value));
}

caricaUtentiCandidatiPerAttivita(value){
  return this.http.post('http://www.cd-software.it/bdt-server/caricaUtentiCandidatiPerAttivita.php',JSON.stringify(value));
}

modificaDatiUtente(value){
  return this.http.post('http://www.cd-software.it/bdt-server/modificaDatiUtente.php',JSON.stringify(value));
}
*/
}

