import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  accion: string = "";
  auto: Automovil = {_id:0, marca:"",submarca:"",modelos:[],descripcion:""};
  lectura: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.accion == "Editar"){
      this.lectura = true;
    }
  }

}
