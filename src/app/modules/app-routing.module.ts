import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../components/user/user.component';
import { ClanComponent } from '../components/clan/clan.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user/:uid',  component: UserComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'clan',     component: ClanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
