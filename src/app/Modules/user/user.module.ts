import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { DisplayAssignedProjectsComponent } from './display-assigned-projects/display-assigned-projects.component';



@NgModule({
  declarations: [
  
  
    UserComponent,
          DisplayAssignedProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
