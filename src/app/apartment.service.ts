import { Injectable } from '@angular/core';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  constructor() {}

  async createAddressArray(options: {
    city: string;
    street: string;
    house: string;
    room: string;
  }): Promise<Address[]> {
    try {
      let address: Address[] = [];

      address.push(
        options.city ? new Address('Город', options.city) : undefined
      );
      address.push(
        options.street ? new Address('Улица', options.street) : undefined
      );
      address.push(
        options.house ? new Address('Дом', options.house) : undefined
      );
      address.push(
        options.room ? new Address('Квартира', options.room) : undefined
      );

      return address;
    } catch (error) {
      throw new Error(error);
    }
  }

  async definePersonsType(type: string): Promise<string> {
    try {
      let definedType: string;

      if (type === 'agent') definedType = 'Риелтор';

      return definedType;
    } catch (error) {
      throw new Error(error);
    }
  }

  async definePremisesType(type: string): Promise<string> {
    try {
      let definedType: string;

      if (type === 'flat') definedType = 'Квартира';

      return definedType;
    } catch (error) {
      throw new Error(error);
    }
  }
}
