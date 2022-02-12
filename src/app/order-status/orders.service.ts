import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Order} from './order'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getPendingOrders():Observable<any>{
      return this.http.get<any>('http://localhost:19977/api/Orders/GetPendingOrders');
  }

  getAllOrders():Observable<any>{
    return this.http.get<any>('http://localhost:19977/api/Orders/GetAllOrders');
}

  addOrderStatus(orderId:any,status:Number):Observable<any>{
    var x=5
    return this.http.post('http://localhost:19988/api/SuspendedOrders/AddOrderStatus?OrderId='+orderId+'&orderstate='+status,x);
}
 
 AddOrder(order:Order){
  return this.http.post('http://localhost:19977/api/Orders/AddOrder',order);
}



}
