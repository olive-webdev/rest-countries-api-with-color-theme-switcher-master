
import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgOptimizedImage, registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import { FormsModule } from '@angular/forms'
import { Cca3Pipe } from './pipes/cca3.pipe'
import { InfiniteScrollModule } from "ngx-infinite-scroll"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    Cca3Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
