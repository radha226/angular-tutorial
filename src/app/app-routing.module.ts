import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
const appRoutes:Routes=[
  { path:'crisis-center',  canActivate : [AuthGuard], component:CrisisCenterComponent},
  {path: 'heroes', canActivate : [AuthGuard], component:HeroListComponent},
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
   
  },
  // {path: 'compose',component: ComposeMessageComponent, outlet: 'popup'},
  {path:'', redirectTo: 'admin', pathMatch:'full'},
  {path:'login', component:LoginComponent},
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
