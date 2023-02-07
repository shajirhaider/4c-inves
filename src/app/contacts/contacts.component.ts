import { Component, OnInit } from '@angular/core';
import * as config from '../jsons/contacts.json'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContent = {
    "imagePath": "",
    "innerImagePath": "",
    "leftSide": {
      "title": "",
      "subTitle": "",
      "content1": "",
      "qouteText": "",
      "title2":"",
      "content2":""
    },
    "rightSide": {
      "addr1":"",
      "addr2":"",
      "addr3":"",
      "addr4":"",
      "phone":"",
      "email":""
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.pageContent = config
  }

}
