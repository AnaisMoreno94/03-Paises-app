import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  

  @Output() onEnter:EventEmitter<string> = new EventEmitter();  
  //Evento generado para escuchar el enter


  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  //Evento generado para escuchar la escritura

  @Input() placeholder:string ='';

  dbouncer:Subject<string>= new Subject;
  

  termino:string = ''

  //Metodo para emitir el valor que se recive del termino en el formulario como el evento del on enter
  
  ngOnInit() {
      this.dbouncer
      .pipe(debounceTime(300)      )
      .subscribe(valor=>{
        this.onDebounce.emit(valor)
      });
  }
  
  buscar(){
   this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
      this.dbouncer.next(this.termino);
  }
}
