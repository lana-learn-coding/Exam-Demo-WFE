import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadedListComponent} from './readed-list/readed-list.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadingListComponent,
    ReadedListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: 'apiLink', useValue: 'http://localhost:8081/books'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
