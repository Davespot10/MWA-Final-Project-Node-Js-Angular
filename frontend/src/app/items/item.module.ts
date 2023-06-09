import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details.component';
import {MatGridListModule } from '@angular/material/grid-list';
import { CheckTokenGuard } from '../protect.guard';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { MapComponent } from './map.component';
import { MyItemComponent } from './my-item.component';
const ItemsComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSnackBarModule,
  MatInputModule,
  MatProgressBarModule,
  MatRadioModule,
  FormsModule,
  MatSelectModule,
  FlexLayoutModule,
  MaterialFileInputModule,
  MatGridListModule
];
@NgModule({

  imports: [ItemsComponents,
    RouterModule.forChild([
      {
        path: 'items/create', component: PostComponent,
        title: "Creat LF",
        canActivate:[CheckTokenGuard]!
      },
      {
        path: '', component: ItemComponent,
        title: "View LF",
        pathMatch: 'full'
      },
      {
        path: 'items/:id', component: DetailsComponent,
        title: "Item Description",

      },
      {
        path: 'myItems', component: MyItemComponent,
        title: "My Items",
        canActivate:[CheckTokenGuard]!

      }


    ])
  ],
  exports: [ItemsComponents],
  declarations: [
    DetailsComponent,
    MapComponent
  ],
})
export class ItemModule {

}
