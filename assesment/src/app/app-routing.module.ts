import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'employee', component: ListEmployeeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'employee/edit/:id', component: EditEmployeeComponent},
  {path: 'employee/:id', component: DetailEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
