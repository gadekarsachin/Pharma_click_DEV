import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppModule } from 'src/app/app.module';
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [EventListComponent, EventDetailsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    AppModule
  //  AgmCoreModule.forRoot({
  //      apiKey: 'AIzaSyA0hjQ-8ZOm3kiL-2zjXfDcy0AGsZbxjyw'
  //   }) 
  ]
})
export class EventsModule { }
