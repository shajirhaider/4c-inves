import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as config from '../../assets/jsons/aboutUs.json'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  customOptions: OwlOptions = {}


  carouselList: any[] = []
  pageContent : any
  banner : any
  bannerCarouselList : any [] = []

  constructor() { }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      navSpeed: 300,
      autoplay: true,
      nav: false,
      // autoHeight : true,
      // autoWidth : true,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        },
        1440: {
          items: 1
        },
        2640: {
          items: 1
        }
      }
    }
    let config1 = config
    this.carouselList = config1.carouselList
    this.pageContent = config1.pageContents
    this.banner = config1.banner
    this.bannerCarouselList = config1.bannerCarouselList
  }

}
