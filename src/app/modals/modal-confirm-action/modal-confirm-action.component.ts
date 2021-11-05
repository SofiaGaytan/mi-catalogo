import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-confirm-action',
  templateUrl: './modal-confirm-action.component.html',
  styleUrls: ['./modal-confirm-action.component.css']
})
export class ModalConfirmActionComponent implements OnInit {

  accion: string = "";
  auto: Automovil = {_id:0, marca:"",submarca:"",modelos:[],descripcion:""};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
