import { Injectable } from '@angular/core';
import { ClientModel } from '../model/client.model';
import { ClientMock } from './client.mock';

@Injectable({
  providedIn: 'root'
})
export class InvestmentServiceService {

  clientMock = ClientMock;

  saveJson() {
    localStorage.setItem('1', JSON.stringify("KAROLDATA"));
  }

  saveClientLocalData(obj: ClientModel) {
    localStorage.setItem(obj.userId, JSON.stringify(obj));
    localStorage.setItem("USER_ID", JSON.stringify(obj.userId));
  }

  getClientLogged(){
    let id = JSON.parse(localStorage.getItem("USER_ID")!);
    return JSON.parse(localStorage.getItem(id)!);
  }

  loggedOut(){
    localStorage.clear();
  }

  getJson(obj: ClientModel) {
    let data = localStorage.getItem(obj.userId);
    return data;
  }


  getMockById(userId: string){
    let client = this.clientMock.filter(el => el.userId == userId);
    debugger;
    return client[0];
  }

  findClient(element: string, userId: string){
    return element == userId;
  }


  constructor() { }
}
