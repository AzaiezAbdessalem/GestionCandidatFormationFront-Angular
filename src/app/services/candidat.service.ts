import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private httpClient: HttpClient) { }

  getCandidats():Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/candidats`)
  }
  postCandidats(data: any):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/candidats`,data);
  }
  getCandidat(candidatId : number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/candidats/${candidatId}`);
  }
  getCandidatsByFormation(formationId:number):Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/candidats/by/${formationId}`);
  }
  deleteCandidat(id : any):Observable<any>{
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/candidats/delete/${id}`)
  }
  updateCandidat(data :any,id : number):Observable<any>{
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/candidats/update/${id}`,{data})
  }

}
