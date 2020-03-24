import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
// import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
// import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
@NgModule({
  declarations: [
    AppComponent,
   // CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    CrisisCenterComponent
    // CrisisCenterComponent,
    // CrisisCenterHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    FormsModule,
    CrisisCenterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
