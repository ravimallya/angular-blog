import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// prime ng
import {InputMaskModule} from 'primeng/inputmask';
// loading bar
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// angular material
import {MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule } from '@angular/material';
// custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { MainComponent } from './main/main.component';
import { SingleComponent } from './single/single.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './helpers/fake-backend-interceptor.service';
import { AuthguardService } from './services/authguard.service';
import { HandleUserService } from './services/handle-user.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    MainComponent,
    SingleComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // prmie ng
    InputMaskModule,
    // loading bar
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    // material modules
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [
    AuthguardService,
    HandleUserService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
