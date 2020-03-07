import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormArray, Validator, Validators, Form} from '@angular/forms';
@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
form :FormGroup;
title="Add Loyalty Billing";
  constructor(
    private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      
      email:['',[Validators.required]],
      billing:this._formBuilder.array([this.createBilling()])
  
    })
console.log(this.form);
    
}
createBilling():FormGroup{
  return this._formBuilder.group({
    billno:'',
    amount:'',

  })
}

Save()
{
  console.log(this.form.value);
}
row = [  { } ];


addRow()
{
const billings = this.createBilling();
this.billing.push(billings)
}
 
get billing(): FormArray{
  return this.form.get('billing') as FormArray;
}




deleteRow(){
var delBtn = confirm(" Do you want to delete ?");
if ( delBtn == true ) {

  this.billing.removeAt(this.billing.length - 1)
} 
}

}
