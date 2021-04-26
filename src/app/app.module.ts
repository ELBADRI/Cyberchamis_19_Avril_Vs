import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { YagaModule } from '@yaga/leaflet-ng2';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'; 
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ChamisComponent } from './chamis/chamis.component';
import { DefisComponent } from './defis/defis.component';
import { TestServerService } from './test-server.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefiDetailsComponent } from './defi-details/defi-details.component';
import { EditDefiComponent } from './edit-defi/edit-defi.component';
import { TestSubmitComponent } from './test-submit/test-submit.component';
import { CreationDefiComponent } from './creation-defi/creation-defi.component';
import { MesVisitesComponent } from './mes-visites/mes-visites.component';


@NgModule({
  declarations: [
    AppComponent,
    ChamisComponent,
    routingComponents,
    DefisComponent,
    DefiDetailsComponent,
    EditDefiComponent,
    TestSubmitComponent,
    CreationDefiComponent,
    MesVisitesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
    AppRoutingModule,

    YagaModule
  ],
  providers: [TestServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
