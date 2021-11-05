import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modals/modal-confirm-action/modal-confirm-action.component';
import { Automovil } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[] = [];
  default: Automovil = {_id:0, marca:"",submarca:"",modelos:[],descripcion:""}
  
  page = 1;
  pageSize=50;

  constructor(private autosService: AutosService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response) => {
      this.autos = response.data;
    });
  }

  openModalAdd(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto)=>{
        console.log(auto)
        this.autosService.addAuto(auto).subscribe((response)=>console.log(response));
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

  openModalUpdate(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Editar";
    modalRef.result.then(
      (auto)=>{
        console.log(auto)
        this.autosService.updateAuto(auto).subscribe((response)=>console.log(response));
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

  openModalDelete(auto: Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Eliminar";
    modalRef.result.then(
      (auto)=>{
        console.log(auto)
        this.autosService.deleteAuto(auto).subscribe((response)=>console.log(response));
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

}
