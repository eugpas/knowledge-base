import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import 'rxjs/add/operator/toPromise';

import { MaterialImportsModule } from './modules/material-imports.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './components/app.component';
import { UserComponent } from './components/user/user.component';
import { ClanComponent } from './components/clan/clan.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MaterialImportsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
