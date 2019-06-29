import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name: string = 'dang van dai';
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.setTextFromHello(this.name);
    this._dataService.textFromHello$.subscribe(text => this.name = text);
  }

  changeName() {
    this.name = "dang van dai change";
    this._dataService.setTextFromHello(this.name);
  }

  changeNameFromChilrent(event){
    this.name = event;
    this._dataService.setTextFromHello(this.name);
  }

}
