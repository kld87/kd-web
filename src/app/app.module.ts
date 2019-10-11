import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ImageModalLinkComponent } from './image-modal-link/image-modal-link.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    IconBarComponent,
    ImageModalLinkComponent,
    AboutContentComponent,
    ExperienceContentComponent,
    PortfolioContentComponent,
    PortfolioCardComponent,
    ContactContentComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
