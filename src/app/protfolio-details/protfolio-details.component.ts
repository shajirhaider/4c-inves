import { Component, OnInit } from '@angular/core';
import * as config from '../jsons/portfolio.json'
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-protfolio-details',
  templateUrl: './protfolio-details.component.html',
  styleUrls: ['./protfolio-details.component.css']
})
export class ProtfolioDetailsComponent implements OnInit {

  portfolioDetail :any  = {
    "id":"",
    "title":"",
    "subTitle":"",
    "imagePath":"",
    "detailImage":"",
    "dateFrom":"",
    "dateTo":"",
    "order":"",
    "detailList":[]
  }
  imageSize = {width: '100%', height: '300px', space: 3}

  constructor(private route:ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let config1 = config
    let routeID = ""
    this.route.paramMap.subscribe(params => {
      // routeID = params.get('id');
    this.portfolioDetail = config1.portfolioList.filter(product => product.id === params.get('id'))[0];
   })

   
  }
  goBack() {
    this.location.back();
  }

}
