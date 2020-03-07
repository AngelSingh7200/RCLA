import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import Billing from './billing'
import Emailrp from './emailrp'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({  
  providedIn: 'root'  
})  
export class ReportsService {  
  private uri = 'http://localhost:8000/billings';  

  private url = 'http://localhost:8000/billingrps'
  constructor(private http: HttpClient) { }  
  // onsubmit(billno, amount) {  
  //   const obj1 = {  
  //     billno,
  //     amount
  //   };  
  //   console.log(obj1);  
  //   this.http.post(`${this.uri}/add`, obj1)  
  //       .subscribe(res => console.log('Done'));  
  // }  

  
  addmailling(subject:string,email:string)  
  {  

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };    
    let maillingDetails = {  
      subject: subject,  
      email:email  
         };    
    return this.http.post<string>(this.url + 'emailrps/add',    
    maillingDetails, httpOptions);    
  }
  addprint(subtotal:string,subpoint:string)  
  {  

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };    
    let billingrpDetails = {  
      subtotal: subtotal,  
      subpoint:subpoint  
         };    
    return this.http.post<string>(this.url + 'billingrps/add',    
    billingrpDetails, httpOptions);    
  }  
  

}  
