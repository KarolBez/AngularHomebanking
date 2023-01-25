import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './view/login/login.component';
import { HomebankingComponent } from './view/homebanking/homebanking.component';
import { InvestmentsFundsComponent } from './view/investments-funds/investments-funds.component';
import { MenuComponent } from './view/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavMenuComponent } from './view/nav-menu/nav-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyInvestmentsComponent } from './view/my-investments/my-investments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomebankingComponent,
    InvestmentsFundsComponent,
    MenuComponent,
    NavMenuComponent,
    MyInvestmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
