import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { EventsService } from '../events.service';
import { SendersService } from '../senders.service';
import Contact from '../contact';  
import {BillingsService} from '../billings.service';

import Emailrp from '../emailrp'
import Sender from '../Sender'; 
@Component({
  selector: 'app-mail-edit',
  templateUrl: './mail-edit.component.html',
  styleUrls: ['./mail-edit.component.css']
})
export class MailEditComponent implements OnInit {
  event: any = {}; 
  events: Event[]; 
 emails:any;
  contacts: Contact[];


  masterSelected:boolean;

  constructor(private bs:BillingsService,private route: ActivatedRoute, private router: Router,  public eventUploadService: EventsService,private ss: SendersService) 
  {
   
   }
  
  // addSender (from, to, subject, text)
  // {
    
  //     this.ss.addSender(from, this.to.toString(), subject,text );  
  //     alert(text)
  
  // }
  ngOnInit() {
    this.route.params.subscribe(params => {  
      this.eventUploadService.EditUsers(params['id']).subscribe(res => {  
        this.event = res;  
    });  
  });
  this.eventUploadService  
  .getContacts()  
  .subscribe((data: Contact[]) => {  
    this.contacts = data;  
});  
    
  }
  errorMsg:string
  to=[];  
  values:string;  
  count:number=0;

  
  onChange(email:string,event) { 
    this.errorMsg="";
    const checked = event.target.checked;  

   
    if (checked) {  
      this.to.push(email);  

     
       } 
       else {  
        const index = this.to.indexOf(email);  
        this.to.splice(index, 1);  
    }  

    this.values=this.to.toString();  
    const count=this.to.length;  
    this.count=count; 



  }
  Emailrp = new Emailrp()
  subject:string
  Save(to, subject, text) {  
    
    this.ss.Save(this.to.toString(), subject,text );  
        alert(text)
    const count=this.to.length;  
    
    if(count == 0)  
    {  
      this.errorMsg="Select at least one Customer";  
    }  
    else  
    {  
      this.count=count;  
    }  
      
     this.bs.addmailling(this.subject, this.to.toString()).subscribe(result=>{  
      console.log(this.Emailrp);
     });  
   }  
 

}
