import { Component, OnInit } from '@angular/core';
import * as config from '../jsons/ourMethod.json'
@Component({
  selector: 'app-our-method',
  templateUrl: './our-method.component.html',
  styleUrls: ['./our-method.component.css']
})
export class OurMethodComponent implements OnInit {
  pageContent :any = {
    "titleImagePath" : "",
    "imagePath": "",
    "innerImagePath": "",
    "title": "",
    "subTitle": "",
    "content1": "",
    "qouteText": "",
    "textList": []
  }
  constructor() { }

  ngOnInit(): void {
    this.pageContent = config
  }

}
