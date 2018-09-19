import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { Json2PdfComponent } from './components/json2-pdf/json2-pdf.component';

import { HttpClientModule } from '@angular/common/http';
import { PrettyPrintPipe } from './pretty-print.pipe';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Json2PdfComponent,
    PrettyPrintPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [PrettyPrintPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
