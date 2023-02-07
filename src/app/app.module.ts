import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurMethodComponent,
    PortfolioComponent,
    OurTeamComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
