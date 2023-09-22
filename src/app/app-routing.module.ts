import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// sử lý điều hướng router
const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserDetailComponent},
  {path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
