import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AddNewProjectComponent } from './add-new-project/add-new-project.component';
import { DisplayProjectsComponent } from './display-projects/display-projects.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
  
  
  
    AdminComponent,
             AddNewProjectComponent,
             DisplayProjectsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    AddNewProjectComponent,
    DisplayProjectsComponent
  ]
})
export class AdminModule { }
