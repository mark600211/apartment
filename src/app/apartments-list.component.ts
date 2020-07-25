import { Component, OnInit } from '@angular/core';
import { ApartmentControlService } from './apartment-control.service';
import { IApartment } from './IApartment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apartments-list',
  styles: [`
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      padding: 2em;
      gap: 2em;
    }

    .item {
      flex: 1 1 auto;
    }
  `],
  template: `
    <div class='container'>
      <ng-container *ngFor='let apartment of apartments'>
          <app-apartment
              class="item" 
              [apartment]='apartment'
              ></app-apartment>
      </ng-container>
    </div>
  `,
})
export class ApartmentsListComponent implements OnInit {

  private subscription$ = new Subscription()

  apartments: IApartment[]

  constructor(private readonly _acs: ApartmentControlService) { }

  ngOnInit(): void {
    this.subscription$.add(
      this._acs.getEntities().subscribe(data =>
        this.apartments = data
      )
    )
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

}
