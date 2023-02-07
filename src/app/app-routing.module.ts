import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OurMethodComponent } from './our-method/our-method.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path : '', component : AboutUsComponent},
  {path : 'our-method', component : OurMethodComponent},
  {path : 'our-team', component : OurTeamComponent},
  {path : 'portfolio', component : PortfolioComponent},
  {path : 'contacts', component : ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
