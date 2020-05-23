import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {NavbarHeaderComponent} from './navbar-header/navbar-header.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarHeaderComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
