import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvestmentServiceService } from 'src/app/shared/service/investment-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;

  loginForm: FormGroup;
  clientData: any;

  constructor(private InvestmentService: InvestmentServiceService, private fb: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit(): void {
    
  }

  //Valida o login de acordo com os dados do mock
  validateLogin(){

    //Procura o usuario de acordo com o userId enviado no front
    this.clientData = this.InvestmentService.getMockById(this.loginForm.value.user);

    //Se o cliente existe, ele verifica a senha
    if(this.clientData){
      if(this.clientData.password == this.loginForm.value.password){
        alert('Login realizado com sucesso');
        this.InvestmentService.saveClientLocalData(this.clientData);
        this._router.navigateByUrl('/home');
      }else{
        alert('Login não realizado');
      }
    }else{
      alert("Usuario não encontrado");
    } 
  }

  loginSuccess(){
    this.InvestmentService.getMockById(this.userId)
  }

  //Cria formulario para validacao de campos
  createForm() {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
