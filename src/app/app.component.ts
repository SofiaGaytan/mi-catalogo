import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-catalogo';
  
  ngOnInit(){
    sessionStorage.setItem('currentPage','1');
  }
}
