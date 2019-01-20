import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[{
  path:'',
  loadChildren:'./users/users.module#UsersModule'
}]

@NgModule({
  declarations:[],
  imports :[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}