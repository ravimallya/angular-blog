import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { MainComponent } from './main/main.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent
  },
  {
    path: 'posts',
    component: MainComponent,
    canActivate: [AuthguardService]
  },
  // otherwise redirect to entry
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
