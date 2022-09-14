import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../modele/filiere.modele';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private url = "http://localhost:8080/api/filiere";

  constructor(private httpClient : HttpClient) { }

  public getAllFilliere() : Observable<Filiere[]>{
    return this.httpClient.get<Filiere[]>(`${this.url}/list`);
  }
}
