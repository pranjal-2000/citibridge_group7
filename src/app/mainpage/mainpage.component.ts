//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MainpgService } from 'app/mainpg.service';
import { StockObj } from 'app/stock-obj';

export interface PeriodicElement {
  name: string;
  position: number;
  NSE: number;
  BSE: number;
  difference: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HDFC', NSE: 4.0026, BSE: 7.09, difference: 3.0},

];

/**{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}, */

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'NSE', 'BSE','difference','save'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //constructor(private mainpgservice:MainpgService){}
  //stocks= new Array<StockObj>();
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator
    /*this.mainpgservice.getUsers().subscribe(response => {
      this.stocks = response.data;
      console.log(this.stocks);
      this.dataSource = new MatTableDataSource(this.stocks);
      this.dataSource.paginator = this.paginator
    });*/
  }

  getRecord(name: any)
 {
    alert("Saved");
  }
}

