import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AblumDetailComponent } from './ablum-detail/ablum-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MarketplaceComponent,
    AblumDetailComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
