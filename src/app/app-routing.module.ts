import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadedListComponent} from './readed-list/readed-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reading', component: ReadingListComponent},
  {path: 'readed', component: ReadedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
