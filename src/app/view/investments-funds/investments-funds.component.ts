import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/shared/model/client.model';
import { ClientInvestmentModel } from 'src/app/shared/model/ClientInvestment.model';
import { InvestmentModel } from 'src/app/shared/model/investments.model';
import { InvestmentServiceService } from 'src/app/shared/service/investment-service.service';
import { InvestmentMock } from 'src/app/shared/service/investments.mock';

@Component({
  selector: 'app-investments-funds',
  templateUrl: './investments-funds.component.html',
  styleUrls: ['./investments-funds.component.css']
})
export class InvestmentsFundsComponent implements OnInit {

  investment = InvestmentMock;
  clientInvestment: ClientInvestmentModel = {investment: {
    name: "",
    idFund: "",
    category: "",
    profitability: 0
  }, valueInvested: 0, idInvestment: 0};

  selectedInvestment: InvestmentModel;
  goToApplyInvestment: boolean = false;
  amountForm: FormGroup;
  client: ClientModel;

  constructor(private _router: Router, private InvestmentService: InvestmentServiceService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.client = this.InvestmentService.getClientLogged();
  }

  applyInvestment(fund: InvestmentModel){
    this.selectedInvestment = fund;
    console.log('Selected', this.selectedInvestment);
    this.goToApplyInvestment = true;
    //let data = this.InvestmentService.getJson();
    //console.log('data storage', data);
  }

  validateCalc(){
    
    let userBalance = this.client.balance;
    let valueToInvest = this.amountForm.value.amount;
    
    //Verifica saldo do cliente

    if(userBalance >= valueToInvest){
      this.confirmInvestment();
    }else{
      window.alert('Saldo insuficiente');
    }

  }

  offLogin(){
    this.InvestmentService.loggedOut();
    this._router.navigateByUrl('');
  }

  confirmInvestment(){
    //Retira o saldo de acordo com o valor selecionado
    this.client.balance = this.client.balance - this.amountForm.value.amount;


    this.clientInvestment.idInvestment = this.client.investments.length;
    this.clientInvestment.investment = this.selectedInvestment;
    this.clientInvestment.valueInvested = this.amountForm.value.amount;

    //Adiciona novo investimento na lista de investimentos do cliente
    this.client.investments.push(this.clientInvestment);

    //Atualiza o localStorage do cliente
    this.InvestmentService.saveClientLocalData(this.client);

    window.alert("Investimento realizado com sucesso");
    console.log('Client', this.client);
    this.goToHome();
  }

  goToMyInvestments(){
    this._router.navigateByUrl('/my-investments');
  }

  goToHome(){
    this._router.navigateByUrl('/home');
  }

  createForm() {
    this.amountForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(100)]]
    });
  }

  goHome(){
    this._router.navigateByUrl('/home');
  }

}
