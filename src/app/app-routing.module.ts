import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCardComponent } from 'src/app/detail-card/detail-card.component'
import { LoginComponent } from 'src/app/login/login.component'

const routes: Routes = [
  {path: 'card', component: DetailCardComponent},
  {path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
