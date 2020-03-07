import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  
import {MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateLoyaltyComponent } from './create-loyalty/create-loyalty.component';
import { EventsService } from './events.service';
import { SendersService } from './senders.service';  
import { MailEditComponent } from './mail-edit/mail-edit.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { BillingComponent } from './billing/billing.component';
import {BillingsService} from './billings.service';
import {ReportsService} from './report.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtestComponent } from './addtest/addtest.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path:"mail",component:CreateLoyaltyComponent
  },
  {
    path:"billing",component:BillingComponent
  },
  {
    path:"loyalty",component:LoyaltyComponent
  },
  {
    path:"addtest",component:AddtestComponent
  },
  {
    path:"report",component:ReportComponent
  },
  {  
    path: 'edit/:id',  
    component: MailEditComponent  
  }, 
  {  
    path: 'upload',  
    component: FileuploadComponent  
  }, 
 
];



@NgModule({
  declarations: [
    AppComponent,
    LoyaltyComponent,
    CreateLoyaltyComponent,
  
    MailEditComponent,

    FileuploadComponent,

    BillingComponent,

    AddtestComponent,

    ReportComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, 
    AppRoutingModule,RouterModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatToolbarModule,MatSidenavModule,MatListModule,FileUploadModule
  ],
  providers: [EventsService,SendersService,BillingsService,ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
