import { Component, OnInit } from '@angular/core';
import * as config from '../jsons/ourNetwork.json'

@Component({
  selector: 'app-our-network',
  templateUrl: './our-network.component.html',
  styleUrls: ['./our-network.component.css']
})
export class OurNetworkComponent implements OnInit {
  pageContent :any = {
    "titleImagePath" : "",
    "title": "",
    "subTitle": "",
    "content1": "",
    "qouteText": "",
    "title2": "",
    "content2" : ""
  }

  constructor() { }

  ngOnInit(): void {
    this.pageContent = config
  }

}
