import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Component/edit-employee/edit-employee.component';
import { EmployeeDashboardComponent } from './Component/employee-dashboard/employee-dashboard.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { TataFleetComponent } from './Component/tata-fleet/tata-fleet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeeDashboardComponent},
  {path: 'employees/:id/:name/:email/:mobile/:salary', component: EditEmployeeComponent},
  {path: 'addemployee', component: AddEmployeeComponent},
  {path: 'editemployee', component: EditEmployeeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TataFleetComponent, LoginComponent, EmployeeDashboardComponent, AddEmployeeComponent, EditEmployeeComponent,
              HomeComponent,PageNotFoundComponent]