import { Component, OnInit } from '@angular/core';
import * as config from '../../assets/jsons/ourTeam.json'
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
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
