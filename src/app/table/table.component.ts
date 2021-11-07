import { Component, OnInit} from '@angular/core';
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
  
  page:number = 1;
  pageSize:number = 50;

  displayProgressBar:boolean = true;

  searchText:string = "";

  constructor(private autosService: AutosService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.page = Number(sessionStorage.getItem('currentPage')?.toString())
    this.autosService.getAutos().subscribe((response) => {
      setTimeout(() =>{
        this.displayProgressBar = false;
        this.autos = response.data;
      },1500)
    });
  }

  openModalAdd(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto)=>{
        console.log(auto)
        this.autosService.addAuto(auto).subscribe((value)=>{
          sessionStorage.setItem('currentPage',this.page.toString())
          this.ngOnInit();
        });
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
        this.autosService.updateAuto(auto).subscribe((value)=>{
          sessionStorage.setItem('currentPage',this.page.toString())
          this.ngOnInit();
        });
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
        this.autosService.deleteAuto(auto).subscribe((value)=>{
          sessionStorage.setItem('currentPage',this.page.toString())
          this.ngOnInit();
        });
      },
      (reason)=>{
        console.log(reason)
      }
    )
  }

}
