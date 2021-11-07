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
  
  inicio: number = 2000;
  fin: number = 2020;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.accion == "Editar"){
      this.lectura = true;
      let modelos: Number[] = this.auto.modelos;
      modelos.sort()
      this.inicio = parseInt(modelos[0].toString());
      this.fin = parseInt(modelos[modelos.length - 1].toString())
    }
  }

  getModelos(){
    this.auto.modelos = Array.from({length: this.fin - this.inicio + 1 }).map((modelo, i)=>Number(i+this.inicio))
    console.log(this.auto.modelos)
  }

  onSubmit(){
    this.getModelos();
    this.activeModal.close(this.auto);
  }

}
