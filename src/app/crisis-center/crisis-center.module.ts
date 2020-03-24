import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
 import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
 import { CrisisListComponent } from './crisis-list/crisis-list.component';
 import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [CrisisListComponent,CrisisDetailComponent,CrisisCenterHomeComponent],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
