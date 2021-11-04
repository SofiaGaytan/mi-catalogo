import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Automovil } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[] = [];
  
  page = 1;
  pageSize=50;

  constructor(private autosService: AutosService) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

}
