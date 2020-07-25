import { Injectable } from '@angular/core';
import { response } from './entities.json';
import { Observable, of } from 'rxjs';
import { IApartment } from './IApartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentControlService {

  constructor() { }

  //simulate here some http request to server side
  getEntities(): Observable<IApartment[]> {
    const apartment = [...response]

    return of(apartment)
  }
}
