import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/';
const uploadAPI = 'http://localhost:8000/api/upload'; 
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: uploadAPI, itemAlias: 'file' });
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded successfully:', item, status, response);
         alert('Your file has been uploaded successfully');
    };
  }

}
