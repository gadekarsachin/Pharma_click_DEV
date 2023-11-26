import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'events/event-list', 
    pathMatch: 'full'
  },
  {
    path: 'events/event-list', component: EventListComponent
  },
  {
    path: 'events/event-details', component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
