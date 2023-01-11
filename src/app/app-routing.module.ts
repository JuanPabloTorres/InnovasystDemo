import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  { path: "", component: AppComponent, pathMatch: "full" },
  { path: 'Login', component: LoginComponent },
  { path: 'newUser', component: NewUserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'editUser/:id', component: EditUserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[NewUserComponent,EditUserComponent,UserListComponent,LoginComponent]
