import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelos'
})

export class FormatoModelosPipe implements PipeTransform {

  transform(modelos: Number[], ...args: unknown[]): unknown {
    if(modelos.length==1){
      return modelos;
    }
    return ` De ${modelos[0]} hasta ${modelos[1]}`
  }

}
