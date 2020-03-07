import { Component, OnInit } from '@angular/core';
import Billing from '../Billing'; 
import Billingrp from '../billingrp'; 
import {BillingsService} from '../billings.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Location } from '@angular/common';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

 Billing = new Billing()
 dataarray=[];

  ngOnInit(): void {
    this.dataarray.push(this.Billing); 
    
}
constructor(private bs:BillingsService) { }

// addRow()
// {
//   this.Billing=new Billing()
//   this.dataarray.push(this.Billing)
// }
deleteRow(index) {
  if(this.dataarray.length ==1) {
    
      return false;
  } else {
      this.dataarray.splice(index, 1);
      
      return true;
  }
}

// onsubmit(billno,amount)
// {
//  this.Billing=new Billing();
//  this.bs.onsubmit(billno,amount);
//   console.log(this.dataarray);

// }
addBilling()
{
  this.Billing=new Billing()
  this.dataarray.push(this.Billing)
 this.save()

}
private save(): void {
  console.log(this.Billing);
  this.bs.addBilling(this.Billing)
      .subscribe();
}

Billingrp = new Billingrp()
subtotal:string
subpoint:string
Save() {  

  
   this.bs.addbillingrp(this.subtotal, this.subpoint).subscribe(result=>{  
    console.log(this.Billingrp);
   });  
 }  


totalCounts(data) {
  let total = 0;

  data.forEach((d) => {
    total += parseInt(d.amount, 10);
  });

  return total;
}
totalpoint(data) {
  let totals =0;

  data.forEach((d) => {
    totals += parseInt(d.amount, 10);
    
  });

  return totals;
}





  

  

}
// addBilling()
// {
//  this.save()

// }
// private save(): void {
//   console.log(this.Billing);
//   this.bs.addBilling(this.Billing)
//       .subscribe();
// }
