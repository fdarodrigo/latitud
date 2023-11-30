import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private apiUrl = 'http://localhost:8000/core/web_scrape/';

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
