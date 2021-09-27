import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'whatsapp', component:WhatsappComponent },
  { path:'**', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
