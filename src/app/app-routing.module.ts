import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomebankingComponent } from './view/homebanking/homebanking.component';
import { InvestmentsFundsComponent } from './view/investments-funds/investments-funds.component';
import { LoginComponent } from './view/login/login.component';
import { MyInvestmentsComponent } from './view/my-investments/my-investments.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomebankingComponent
  },
  {
    path: 'funds',
    component: InvestmentsFundsComponent
  },
  {
    path: 'my-investments',
    component: MyInvestmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
