import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, AboutUsComponent, ContactUsComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
