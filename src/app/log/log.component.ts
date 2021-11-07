import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  mensajes: string[] = [];

  constructor(private menssageService: MessagesService) { }

  ngOnInit(): void {
    this.mensajes = this.menssageService.mensajes;
  }

  limpiar(){
    this.menssageService.clear();
    this.ngOnInit();
  }

}
