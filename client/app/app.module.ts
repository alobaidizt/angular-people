import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { PeopleComponent }      from './components/people/people.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PersonDetailComponent }  from './components/personDetail/person-detail.component';

import { PersonService }  from './services/person.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    PeopleComponent,
    DashboardComponent,
    PersonDetailComponent
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
