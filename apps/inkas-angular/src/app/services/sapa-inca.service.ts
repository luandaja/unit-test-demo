import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { SapaInca } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class SapaIncaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<SapaInca[]> {
    return this.http.get<SapaInca[]>('assets/sapa-incas.json').pipe(retry(2));
  }
}
