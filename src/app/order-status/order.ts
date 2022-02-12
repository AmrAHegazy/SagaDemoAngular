import { HttpStatusCode } from "@angular/common/http";

export interface Order{
    amount:Number;
    name:string;
    notes:string;
    id:string;
    createdDate:string;
    status:number;

}