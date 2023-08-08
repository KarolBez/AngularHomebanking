import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/shared/model/client.model';
import { ClientMock } from 'src/app/shared/service/client.mock';
import { InvestmentServiceService } from 'src/app/shared/service/investment-service.service';
import { InvestmentMock } from 'src/app/shared/service/investments.mock';

@Component({
  selector: 'app-homebanking',
  templateUrl: './homebanking.component.html',
  styleUrls: ['./homebanking.component.css']
})
export class HomebankingComponent implements OnInit {

  client = ClientMock;
  investment = InvestmentMock;
  clientLogged: ClientModel;

  constructor(private _router: Router, private InvestmentService: InvestmentServiceService) { }

  ngOnInit(): void {
    // console.log('Mock', this.investment);
    this.clientLogged = this.InvestmentService.getClientLogged();
    // let client = this.InvestmentService.getMockById("2");
    // this.InvestmentService.saveClientLocalData(client);
  }

  goToFunds(){
    //this.InvestmentService.saveJson();
    this._router.navigateByUrl('/funds');
  }

  offLogin(){
    this.InvestmentService.loggedOut();
    this._router.navigateByUrl('');
  }

  goToMyInvestments(){
    this._router.navigateByUrl('/my-investments');
  }

}
