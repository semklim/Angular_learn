import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClosedSocialsComponent } from './closed-socials/closed-socials.component';
import { TwitterComponent } from './closed-socials/twitter/twitter.component';
import { LinkedInComponent } from './closed-socials/linked-in/linked-in.component';
import { PinterestComponent } from './closed-socials/pinterest/pinterest.component';

@NgModule({
  declarations: [
    ClosedSocialsComponent,
    TwitterComponent,
    LinkedInComponent,
    PinterestComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    ClosedSocialsComponent,
    TwitterComponent,
    LinkedInComponent,
  ],
})
export class SocialModule { }
