import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselComponent} from "./components/carousel/carousel.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ApplicationComponent} from "./components/application/application.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SearchComponent} from "./components/search/search.component";
import {StarsComponent} from "./components/stars/stars.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {HomeComponent} from './components/home/home.component';
import {FilterPipe} from './pipes/filter.pipe';
import {ReactiveFormsModule} from "@angular/forms";

const components = [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    ApplicationComponent,
    FooterComponent,
    SearchComponent,
    StarsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HomeComponent,
]


@NgModule({
    declarations: [
        ...components,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
