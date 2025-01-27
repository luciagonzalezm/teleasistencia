import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPersona} from '../interfaces/i-persona';

@Injectable({
  providedIn: 'root'
})

export class CargaPersonaService {
  private URL_SERVER_PERSONAS = 'http://localhost:8000/api-rest/persona';

  constructor(private http: HttpClient) {
  }

  getPersonas(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(this.URL_SERVER_PERSONAS);
  }

  getPersona(idPersona: number): Observable<IPersona> {
    return this.http.get<IPersona>(this.URL_SERVER_PERSONAS + '/' + idPersona);
  }

  modificarPersona(persona: IPersona): Observable<IPersona> {
    return this.http.put<IPersona>(this.URL_SERVER_PERSONAS + '/' + persona.id, persona);
  }

  nuevaPersona(persona: IPersona): Observable<IPersona> {
    return this.http.post<IPersona>(this.URL_SERVER_PERSONAS, persona);
  }
}
