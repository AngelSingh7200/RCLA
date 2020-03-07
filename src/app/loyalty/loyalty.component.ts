import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import Contact from '../contact';  
@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {
  contacts: Contact[];  
  constructor( public eventUploadService: EventsService) { }

  ngOnInit() {
    this.eventUploadService  
    .getContacts()  
    .subscribe((data: Contact[]) => {  
      this.contacts = data;  
  });  
    
  }

}
