import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { OurNetworkComponent } from './our-network/our-network.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProtfolioDetailsComponent } from './protfolio-details/protfolio-details.component';

const routes: Routes = [
  {path : "", redirectTo: 'about-us', pathMatch: 'full' },
  {path : 'about-us', component : AboutUsComponent},
  {path : 'our-method', component : OurMethodComponent},
  {path : 'our-team', component : OurTeamComponent},
  {path : 'portfolio', component : PortfolioComponent},
  {path : 'portfolio/portfolio-detials/:id', component : ProtfolioDetailsComponent},
  {path : 'contacts', component : ContactsComponent},
  {path : 'our-network', component : OurNetworkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
