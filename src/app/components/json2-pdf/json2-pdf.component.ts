import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { PrettyPrintPipe } from '../../pretty-print.pipe';
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
  dismissible = true;
  disableButton = true;
  alertsShow = false;
  defaultAlerts: any =
    {
      type: 'danger',
      msg: `No Data is avaiable in json file`
    }
  ;
  alerts = this.defaultAlerts;
  ngOnInit() {
    // this.httpService.get('src/assets/test.json').subscribe((data: any) => {
    //   this.jsonData = data as any[];
    //   console.log(this.jsonData);
    // }, (error: HttpErrorResponse) => {
    //   console.log(error);
    // });
  }
// Read File Convert it into String And String is convert it object
uploadDocument(file) {
  this.alertsShow = false ;
  this.disableButton = false;
  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    this.jsonData = JSON.parse(fileReader.result);
    console.log(fileReader.result);
  }
  fileReader.readAsText(file.target.files[0]);
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
    console.log('check');
    console.log(this.jsonData);
    // this.jsonData = JSON.parse(this.jsonData);
    const doc = new jsPDF();
    const col = ['Keys', 'values'];
    const rows = [];
    let temp: any;
    if (this.jsonData.data.length !== 0 ) {
      console.log('check1');
        for (let i = 0; i <= this.jsonData.data.length - 1; i++) {
          for (const key in this.jsonData.data[i]) {
            if (this.jsonData.data[i].hasOwnProperty(key)) {
              // console.log('Type of variable');
              // console.log(typeof this.jsonData.data[i][key]);
            if (typeof this.jsonData.data[i][key] === 'object') {
              // console.log('check');
              temp =[key, this.getString(this.jsonData.data[i][key])];
              rows.push(temp);
            } else {
                temp = [key, this.jsonData.data[i][key]];
                rows.push(temp);
              }
            }
        }
      }
      doc.autoTable(col, rows, {
        startY: 20,
        styles: {overflow: 'linebreak', columnWidth: 'wrap'},
        columnStyles: {
          1: {columnWidth: 'auto'},
          2: {columnWidth: 'wrap'}}
      });
      // Save the PDF
      doc.save('Test.pdf');
  } else {
    this.alertsShow = true ;
    }
  }
  onClosed(): void {
    this.alertsShow = false ;
  }
}
