import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudCreateComponent } from './stud-create/stud-create.component';
import { StudUpdateComponent } from './stud-update/stud-update.component';
//import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
//import { StudReadComponent } from './stud-read/stud-read.component';
//import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/stud-list',
    pathMatch:'full'

  },
  {
    path:"stud-list",
    component:StudListComponent
  },
  {
    path:"stud-create",
    component:StudCreateComponent
  },
  {
    path:"stud-update/:id",
    component:StudUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
