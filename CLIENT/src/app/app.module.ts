import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrViewComponent } from './components/qr-view/qr-view.component';
import { HomeComponent } from './pages/home/home.component';
import { WhatsappComponent } from './pages/whatsapp/whatsapp.component';
import { HttpClientModule } from '@angular/common/http'
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    QrViewComponent,
    HomeComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
