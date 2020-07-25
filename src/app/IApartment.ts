export interface IApartment {
  id: number;
  type: string;
  attributes: IAttributes;
  relationships: IRelationships;
}

export interface IAttributes {
  title: string;
  rooms: number;
  address: IAddress;
  area: number;
  unit: string;
}

export interface IAddress {
  city: string;
  street: string;
  house: string;
  room: string;
}

export interface IRelationships {
  id: number;
  type: string;
  attributes: {
    first_name: string;
    last_name: string;
    middle_name: string;
  }
}
