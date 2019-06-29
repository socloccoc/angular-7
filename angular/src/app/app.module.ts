import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './components/work/work.component';
import { PersonComponent } from './components/person/person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    PersonComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
