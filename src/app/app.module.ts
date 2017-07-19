import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';

import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { RouterModule, Routes } from '@angular/router';
import { IonicApp, IonicModule } from 'ionic-angular';
import 'hammerjs';

const appRoutes: Routes = [
  { path: 'login',
    component : LoginComponent
  },
  { path: 'menu',
    component : MenuComponent
  },
  /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
  ,{ path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent,
    MenuComponent,
    ToolbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    IonicModule.forRoot(AppComponent),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [IonicApp],
})
export class AppModule { }
