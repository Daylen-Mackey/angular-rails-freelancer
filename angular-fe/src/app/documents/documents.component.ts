import { Component, OnInit } from '@angular/core';
import { Document } from './documents';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  private _documents: Document[] = [];
  public get documents(): Document[] {
    return this._documents;
  }
  public set documents(value: Document[]) {
    this._documents = value;
  }
  

  constructor() { 
    this._documents = [
      {
        title : "Title1",
        description : "desc", 
        file_url : "file_url", 
        updated_at: "time", 
        image_url:"img_url"

      },
      {
        title : "Title2",
        description : "desc", 
        file_url : "file_url", 
        updated_at: "time", 
        image_url:"img_url"

      },
      {
        title : "Title3",
        description : "desc", 
        file_url : "file_url", 
        updated_at: "time", 
        image_url:"img_url"

      },
    ]
    
  }

  ngOnInit(): void {

  }

}
