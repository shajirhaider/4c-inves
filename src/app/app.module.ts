import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OurNetworkComponent } from './our-network/our-network.component';
import { ProtfolioDetailsComponent } from './protfolio-details/protfolio-details.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    OurMethodComponent,
    PortfolioComponent,
    OurTeamComponent,
    ContactsComponent,
    OurNetworkComponent,
    ProtfolioDetailsComponent,
    PrivacyComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
