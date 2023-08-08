import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/shared/model/client.model';
import { ClientInvestmentModel } from 'src/app/shared/model/ClientInvestment.model';
import { InvestmentModel } from 'src/app/shared/model/investments.model';
import { InvestmentServiceService } from 'src/app/shared/service/investment-service.service';

@Component({
  selector: 'app-my-investments',
  templateUrl: './my-investments.component.html',
  styleUrls: ['./my-investments.component.css']
})
export class MyInvestmentsComponent implements OnInit {

  clientData: ClientModel;
  noInvestment: boolean = true;
 // investmentElement: ClientInvestmentModel;

  constructor(private InvestmentService: InvestmentServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.clientData = this.InvestmentService.getClientLogged();

    if(this.clientData.investments.length != 0){
      this.noInvestment = false;
    }

    console.log(this.clientData);
  }

  recuseValue(investment: ClientInvestmentModel){

    //Adiciona 150 de rentabilidade do investimento
    this.clientData.balance = this.clientData.balance + investment.valueInvested + 150;
    

    this.clientData.investments.find((el, key) => {
      if(el.idInvestment == investment.idInvestment){
        //Retira investimento da lista de investimentos do cliente
        this.clientData.investments.splice(key, 1);
      }
    });

    //Atualiza o localStorage do cliente
    this.InvestmentService.saveClientLocalData(this.clientData);

    window.alert("Resgate realizado com sucesso");

    if(this.clientData.investments.length == 0){
      this.noInvestment = true;
    }
  }

  goHome(){
    this._router.navigateByUrl('/home');
  }

  offLogin(){
    this.InvestmentService.loggedOut();
    this._router.navigateByUrl('');
  }

}
