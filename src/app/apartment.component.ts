import { Component, OnInit, Input } from '@angular/core';
import { IApartment, IAttributes } from './IApartment';
import { ApartmentService } from './apartment.service';
import { Address } from './address.model';

@Component({
  selector: 'app-apartment',
  styles: [
    `
      .card {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
        grid-gap: 1rem;
      }
    `,
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ attributes.title }}</mat-card-title>
        <mat-card-subtitle
          >Количество комнат: {{ attributes.rooms }}</mat-card-subtitle
        >
      </mat-card-header>
      <mat-card-content class="card">
        <div>
          <div *ngFor="let ad of address">
            <p *ngIf="ad">{{ ad.label }}: {{ ad.value }}</p>
          </div>
        </div>
        <div>
          <p>Тип помещения: {{ premises }}</p>
          <p>Площадь: {{ attributes.area }}{{ attributes.unit }}</p>
          <p>{{ person }}: {{ name }}</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ApartmentComponent implements OnInit {
  @Input() apartment: IApartment;
  attributes: IAttributes;
  address: Address[];
  name: string;
  person: string;
  premises: string;

  constructor(private readonly _as: ApartmentService) {}

  async ngOnInit(): Promise<void> {
    this.attributes = this.apartment.attributes;
    this.address = await this._as.createAddressArray(
      this.apartment.attributes.address
    );
    this.name = await this.createName(this.apartment.relationships.attributes);
    this.person = await this._as.definePersonsType(
      this.apartment.relationships.type
    );
    this.premises = await this._as.definePremisesType(this.apartment.type);
  }

  async createName(options: {
    first_name: string;
    last_name: string;
    middle_name: string;
  }): Promise<string> {
    return `${options.first_name} ${options.middle_name} ${options.last_name}`;
  }
}
