import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutContentComponent } from './about-content/about-content.component';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'about', component: AboutContentComponent },
  { path: 'experience', component: ExperienceContentComponent },
  { path: 'portfolio', component: PortfolioContentComponent },
  { path: 'contact', component: ContactContentComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**',   redirectTo: '/about', pathMatch: 'full' }, // 404s, default route to dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }