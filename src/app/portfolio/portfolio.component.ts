import { Component, OnInit } from '@angular/core';
import * as config from '../../assets/jsons/portfolio.json'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  pageContent :any = {
    "titleImagePath" : "",
    "title": "",
    "subTitle": "",
    "content1": "",
    "qouteText": "",
    "title2": "",
    "content2" : ""
  }
  portfolioList: any[] = []

  constructor() { }

  ngOnInit(): void {
    let config1 =config
    this.pageContent = config1
    this.portfolioList = config1.portfolioList.filter((x: any) => {
      if (this.compareDate(x.dateFrom, x.dateTo)) {
        return x
      }
    })

  }

  compareDate(formDate:string, toDate:string){
    if(formDate && toDate){
      let today = Date.now() // Date.parse(new Date()) //new Date()
      if(Date.parse(formDate) <= today  && today <= Date.parse(toDate)  ) {
        return true
      }else{
        return false
      }
    }{
      return true
    }
  }


}
