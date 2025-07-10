import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HistoricoRolagem } from "../models/historicoRolagem";
import { Dado } from "../models/dado";

@Injectable({
  providedIn: 'root'
})
export class RolagemDeDadosService {

  private apiUrl = 'http://localhost:8080/dados';

  constructor(private http: HttpClient) { }

  listarHistorico(): Observable<HistoricoRolagem[]> {
    return this.http.get<HistoricoRolagem[]>(this.apiUrl);
  }

  rolarDado(dado: Dado): Observable<Dado> {
    return this.http.post<Dado>(this.apiUrl, dado);
  }
}