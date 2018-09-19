import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { Json2PdfComponent } from './components/json2-pdf/json2-pdf.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { PrettyPrintPipe } from './pretty-print.pipe';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    Json2PdfComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [PrettyPrintPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
