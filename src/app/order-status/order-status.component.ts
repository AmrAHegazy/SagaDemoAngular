import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from './order';
import{ OrdersService} from './orders.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  public allorders:Order[]=[];
  public rowdata:Order[]=[];
  public Status:any[]=["Approved","Rejected","Pending"];
  public OrderFormgroup:FormGroup;
  public order:Order = {
    amount:0,
    name:'',
    notes:'',
    id:'',
    createdDate:'',
    status:0
  };
  constructor(private ordersService:OrdersService,private fb:FormBuilder) { 
       this.OrderFormgroup=this.fb.group({
         name:['',Validators.required],
         amount:['',Validators.required],
         notes:['',Validators.required]
       });
  }

  ngOnInit(): void {

    this.getOrders();
    this.getPendingOrders();
  
  }

  getOrders(){
    this.ordersService.getPendingOrders().subscribe(
      res=>{
        console.log(res);
        this.rowdata=res.data      
      }
    )
  }

  getPendingOrders(){
    this.ordersService.getAllOrders().subscribe(
      res=>{
        console.log(res);
        this.allorders=res.data.results
        
      }
    )
  }

  RejectOrder(orderId:any){
    this.ordersService.addOrderStatus(orderId,1).subscribe(
      res=>{
        window.location.reload();
      }
    );
  }

  AcceptOrder(orderId:any){
    this.ordersService.addOrderStatus(orderId,0).subscribe(
      res=>{
        window.location.reload();

      }
    );
  }

 AddOrder(){
   this.order=this.OrderFormgroup.value
    this.ordersService.AddOrder(this.order).subscribe(
      res=>{

        window.location.reload();

      }
    );
  }
  

}


export interface Prd {
  id: Number; 
  amount: Number; 
  createdDate: Date;
  name:string;
  notes:string;
}
