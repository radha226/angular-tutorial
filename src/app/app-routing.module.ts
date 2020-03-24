import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
const appRoutes:Routes=[
  { path:'crisis-center', component:CrisisCenterComponent},
  {path: 'heroes', component:HeroListComponent},
  {path:'', component:HeroListComponent, pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
