import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chilrent',
  templateUrl: './chilrent.component.html',
  styleUrls: ['./chilrent.component.css']
})
export class ChilrentComponent implements OnInit {
  name: string;
  // @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.textFromHello$.subscribe(text => this.name = text);
  }

  changeName(){
    this.name = "dang van dai change from chilrent";
    this._dataService.setTextFromHello(this.name);
  }

}
