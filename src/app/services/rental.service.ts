import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../models/rental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44388/api/rentals/getall"
  constructor(private httpClient: HttpClient) { }

  getRental(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}