import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ResumeModule} from './resume/resume.module';

@NgModule({
  declarations: [
      AppComponent,
      WelcomeComponent,
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot([
          {path: 'welcome', component: WelcomeComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}

      ]),
      ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
