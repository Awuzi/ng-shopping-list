import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent}, // default routing on /
  {path: 'login', component: LoginComponent}, // on /login
  {path: 'register', component: RegisterComponent} // on /register
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
