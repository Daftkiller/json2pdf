import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { PrettyPrintPipe } from '../../pretty-print.pipe';
// import * as jsPDF from 'jspdf';
declare let jsPDF: any;

@Component({
  selector: 'app-json2-pdf',
  templateUrl: './json2-pdf.component.html',
  styleUrls: ['./json2-pdf.component.css']
})
export class Json2PdfComponent implements OnInit {
  constructor(private httpService: HttpClient,
              private prettyPrintPipe: PrettyPrintPipe) {}
  jsonData: any = [];
  file: any;

  ngOnInit() {
    // this.httpService.get('src/assets/test.json').subscribe((data: any) => {
    //   this.jsonData = data as any[];
    //   console.log(this.jsonData);
    // }, (error: HttpErrorResponse) => {
    //   console.log(error);
    // });
  }
// Read File function
fileChanged(e) {
    this.file = e.target.files[0];
    console.log(this.file);
    this.uploadDocument(this.file);
}
// Read File Convert it into String And String is convert it object
uploadDocument(file) {
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.jsonData = JSON.parse(fileReader.result);
    console.log(fileReader.result);
  }
  fileReader.readAsText(this.file);
}

// Convert Object into String
  getString(object) {
    if (object == null || object === false || object === '') {
      return object;
    }
    return this.prettyPrintPipe.transform(object);
  }
 // Create PDF Fuction
  downloadPdf() {
    console.log(this.jsonData);
    // this.jsonData = JSON.parse(this.jsonData);
    const doc = new jsPDF();
    const col = ['Keys', 'values'];
    const rows = [];
    let temp: any;
    for (const key in this.jsonData.data[0]) {
      if (this.jsonData.data[0].hasOwnProperty(key)){
        // console.log('Type of variable');
        // console.log(typeof this.jsonData.data[0][key]);
      if (typeof this.jsonData.data[0][key] === 'object'){
        // console.log('check');
        temp =[key, this.getString(this.jsonData.data[0][key])];
        rows.push(temp);
      } else {
        temp = [key, this.jsonData.data[0][key]];
        rows.push(temp);
      }
      // console.log(key);
     }
    }
    doc.autoTable(col, rows, {
      startY: 20,
      styles: {overflow: 'linebreak', columnWidth: 'wrap'},
      columnStyles: {
        1: {columnWidth: ''},
        2: {columnWidth: 'wrap'}}
    });
    // Save the PDF
    doc.save('Test.pdf');
    }

}
