import { ClientInvestmentModel } from "./ClientInvestment.model";

export class ClientModel{
    userId: string;
    name: string;
    investments: ClientInvestmentModel[];
    balance: number;
    password: string;
}