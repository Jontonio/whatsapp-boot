import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-qr-view',
  templateUrl: './qr-view.component.html',
  styleUrls: ['./qr-view.component.css']
})
export class QrViewComponent implements OnInit {

  constructor( public dataservice:DataService) { }

  ngOnInit(): void {
  }

  generate(){
    this.dataservice.getQr();
  }

}
