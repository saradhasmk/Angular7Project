import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent } from './users.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {ListUserComponent} from './list-user/list-user.component';


const routes:Routes =[{
    path:'',
    component:UsersComponent    
},
{
  path:'create',
  component:CreateUserComponent    
},{
  path:'user-list',
  component:ListUserComponent    
}
]

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    ListUserComponent
  ],
  imports: [
    
    RouterModule.forChild(routes)
  ],

  exports:[RouterModule]
})
export class UsersRoutingModule { }
