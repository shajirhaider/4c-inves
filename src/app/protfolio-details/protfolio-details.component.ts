import { Component, OnInit } from '@angular/core';
import * as config from '../../assets/jsons/portfolio.json'
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';


@Component({
  selector: 'app-protfolio-details',
  templateUrl: './protfolio-details.component.html',
  styleUrls: ['./protfolio-details.component.css']
})
export class ProtfolioDetailsComponent implements OnInit {

  portfolioDetail: any = {
    "id": "",
    "title": "",
    "subTitle": "",
    "imagePath": "",
    "detailImage": "",
    "dateFrom": "",
    "dateTo": "",
    "order": "",
    "detailList": []
  }
  imageSize = { width: '100%', height: '300px', space: 3 }

  constructor(private route: ActivatedRoute, private location: Location, private titleService: Title,) { }

  ngOnInit(): void {
    let config1 = config
    let today = Date.now() // Date.parse(new Date()) //new Date()
    this.route.paramMap.subscribe(params => {
      this.portfolioDetail = config1.portfolioList.filter(product => product.id === params.get('id'))[0];
      this.titleService.setTitle(`4c - Portfolio ${this.portfolioDetail.title}`);
      
      this.portfolioDetail.detailList = this.portfolioDetail.detailList.filter((x: any) => {
        if (this.compareDate(x.dateFrom, x.dateTo, today)) {
          return x
        }
      })
    })
  }
  goBack() {
    this.location.back();
  }

  compareDate(formDate: string, toDate: string, today: any) {
    if (formDate && toDate) {
      if (Date.parse(formDate) <= today && today <= Date.parse(toDate)) {
        return true
      } else {
        return false
      }
    } {
      return true
    }
  }

}
