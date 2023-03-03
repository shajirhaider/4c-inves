import { Component,OnInit } from '@angular/core';
import * as config from '../assets/jsons/menu.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '4c-investment';
  isMobile = false
  menus :any [] = []
  footerList :any [] = []
  socialMedia : any[] = []
  constructor() { }

  ngOnInit(): void {
    
    let config1 = config
    this.menus = config1.menuList
    this.footerList = config1.footerList
    this.socialMedia = config1.socialMediaList
  }
}
