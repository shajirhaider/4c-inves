import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { OurNetworkComponent } from './our-network/our-network.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProtfolioDetailsComponent } from './protfolio-details/protfolio-details.component';

const routes: Routes = [
  {path : "", redirectTo: 'about-us', pathMatch: 'full' },
  {path : 'about-us', component : AboutUsComponent,  title: '4c - About Us' },
  {path : 'our-method', component : OurMethodComponent,  title: '4c -Our Method' },
  {path : 'our-team', component : OurTeamComponent,  title: '4c - Our Team' },
  {path : 'portfolio', component : PortfolioComponent,  title: '4c - Portfolio' },
  {path : 'portfolio/portfolio-detials/:id', component : ProtfolioDetailsComponent, title: '4c - Portfolio Details'},
  {path : 'contacts', component : ContactsComponent, title: '4c -Contacts'},
  {path : 'our-network', component : OurNetworkComponent, title: '4c - Our Network'},
  {path : 'privacy', component : PrivacyComponent, title: '4c -Privacy'},
  {path : 'impressum', component : ImpressumComponent, title: '4c -Impressum'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
