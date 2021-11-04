import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {

  autos: Automovil[] = [];
  autoSeleccionado!: Automovil;

  page = 1;
  pageSize=50;
  
  constructor(private modalService:NgbModal, private autosService: AutosService) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

  onSelect(content:any,auto:Automovil){
    this.autoSeleccionado = auto;
    this.openModal(content);
  }

  
  openModal(content:any) {
    this.modalService.open(content);
  }

}
