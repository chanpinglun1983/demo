import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login',
    component : LoginComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
