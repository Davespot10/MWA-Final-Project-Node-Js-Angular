import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  template: `
    <div class="items" *ngIf="items">
      <div fxLayout="row wrap" fxLayoutGap.gt-lg="16px grid">
        <div
          fxFlex="33%"
          fxFlex.xs="100%"
          fxFlex.sm="50%"
          *ngFor="let item of items"
        >
          <mat-card class="item-card mat-elevation-z4">
            <mat-card-header class="card-container">
              <mat-card-title >{{
                item.postType
              }}</mat-card-title>
              <mat-card-subtitle >{{
                item.itemType
              }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="post-item">
                <div class="item-image">
                  <img
                    mat-card-image
                    src="https://images.ctfassets.net/16nm6vz43ids/1GwdOaWeHitrvRthtctmdL/5a6cb6e5208b474b61e8aaac0d8a5e02/How_to_find_lost_or_stolen_laptop.jpg"
                    alt="laptop"
                  />
                </div>
              </div>

              <h3>{{ item.description }}</h3>
            </mat-card-content>
            <mat-card-footer>

                <!-- I think we need to the map here or on the details page  -->
            </mat-card-footer>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .items {
        padding: 16px;
      }
      .card-container {
        color:#E64A19;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      ,
      .item-card {
        width: 40%;
        margin: 0 auto;
      }
      mat-card {
        margin: 15px;
        padding: 20px;
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
      }
    `,
  ],
})
export class ItemComponent implements OnInit {
  items: Item[]=[];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.getItems().subscribe({
      next: (result: Item[]) => {
        this.items = result;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
