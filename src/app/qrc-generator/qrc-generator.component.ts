import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-qrc-generator',
  templateUrl: './qrc-generator.component.html',
  styleUrls: ['./qrc-generator.component.css']
})
export class QRCGeneratorComponent implements OnInit {
  
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';




  // We can have Canvas/Img/Url as elementType
  //elementType = QRCodeModule.ElementTypes.URL;
  
  // We can have High/Low/Medium/Quartile
 // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  // Need to specify the valid website address
  //value = 'https://www.geeksforgeeks.com/';
  

  constructor () {}

  ngOnInit(): void {
  }

}
