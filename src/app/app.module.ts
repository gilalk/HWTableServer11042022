import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserInformationComponent } from './components/user-information/user-information.component';

const appRoutes:Routes = [
  {path : '', component : UserMainComponent},
  {path : 'mainTable', component : UserMainComponent},
  {path : 'mainTable/:id', component : UserInformationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserMainComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
