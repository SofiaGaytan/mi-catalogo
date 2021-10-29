import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AUTOMOVILES } from '../data';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})



export class ListComponent implements OnInit {

  autos: Automovil[] = [];
  autoSeleccionado!: Automovil;
  
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onSelect(content:any,auto:Automovil){
    this.autoSeleccionado = auto;
    this.openModal(content);
  }

  
  openModal(content:any) {
    this.modalService.open(content);
  }

}
