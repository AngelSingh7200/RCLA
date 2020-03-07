import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLoyaltyComponent } from './create-loyalty/create-loyalty.component';
  
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
