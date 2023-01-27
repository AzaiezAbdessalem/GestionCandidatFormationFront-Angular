import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }
  getListFormations(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/formations`)
  }
  postFormations(data: any):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/formations`,data);
  }
  getOneFormation(id : number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/formations/${id}`)
  }
}
