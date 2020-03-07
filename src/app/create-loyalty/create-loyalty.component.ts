import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { EventsService } from '../events.service';  
import Event from '../event';  

import { HttpEvent, HttpEventType } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-loyalty',
  templateUrl: './create-loyalty.component.html',
  styleUrls: ['./create-loyalty.component.css']
})
export class CreateLoyaltyComponent implements OnInit {

  preview: string;
  form: FormGroup;
  percentDone: any = 0;
  events = [];
  Events: any = [];

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public eventUploadService: EventsService

  ) {
    this.getUsers();
    // Reactive Form
    this.form = this.fb.group({

      avatar: [null],
      Eventtitle: [''],
    EventDescription: [''], 
   
    bodyEvent:[''],
     
    })
  }

  ngOnInit() {}
  getUsers() {
    this.eventUploadService.getUsers().subscribe((res) => {
      this.Events = res['events'];
    })
  }
  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  submitForm() {
    this.eventUploadService.addUser(
      this.form.value.avatar,
      this.form.value.Eventtitle,
      this.form.value.EventDescription,
      this.form.value.bodyEvent,
      
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.percentDone = Math.round(event.loaded / event.total * 100);
          console.log(`Uploaded! ${this.percentDone}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          this.percentDone = false;
          this.router.navigate(['mail'])
      }
    })
  }

}





  