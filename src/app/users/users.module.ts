import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent } from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {CreateUserComponent} from './create-user/create-user.component';
import {ListUserComponent} from './list-user/list-user.component';
const routes:Routes =[{
  path:'',
  component:UsersComponent    
},
{
  path:'/create',
  component:CreateUserComponent    
},
{
  path:'/list',
  component:ListUserComponent    
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule
    
  ]
})
export class UsersModule { }
