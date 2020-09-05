import { Component, OnInit, EventEmitter ,Output} from '@angular/core';

//@Output()pessoaAdicionada = new EventEmitter();

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {



  @Output() pessoaAdicionada = new EventEmitter();
  
  adicionar(nome) {    
    const pessoa = {      
      nome: nome,
    };    
    this.pessoaAdicionada.emit(pessoa);  
  }
  

}
