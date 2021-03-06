import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { WeatherCardTodayComponent } from './weather-card-today/weather-card-today.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule, DatePipe} from '@angular/common';
import { Nl2BrPipeModule } from 'nl2br-pipe';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SavedlocationsComponent } from './savedlocations/savedlocations.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherCardTodayComponent,
    SubscribeComponent,
    UnsubscribeComponent,
    LoginComponent,
    RegisterComponent,
    SavedlocationsComponent,
    AnalyticsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    CommonModule,
    Nl2BrPipeModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    CommonModule,
    BrowserModule,
  ],
  providers: [Nl2BrPipeModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
