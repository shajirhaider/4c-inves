import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4c-investment';
  isMobile = false
  menus = [
    {text : "ABOUT US", path : ""},
    {text : "OUR METHOD", path : "/our-method"},
    {text : "PORTFOLIO", path : "/portfolio"},
    {text : "OUR TEAM", path : "/our-team"},
    {text : "CONTACTS", path : "/contacts"},
  ]
}
