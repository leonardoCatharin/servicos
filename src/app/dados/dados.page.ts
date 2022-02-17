import { DadosService } from './../api/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  constructor(private service: DadosService) {  }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados().then(dados => {
      console.log('GET ALL DADOS');
      console.log(dados);
    })
  }

  /* recupera um objeto pelo seu id */
  public getDadoById(id: number){
    this.service.getDadoById(id).then(dados => {
      console.log('GET BY ID');
      console.log(dados);
    })
  }

  /* atualiza um objeto */
  public updateById() {
    
    /* alteração do body */
    let obj = {
      userId: 2, 
      id: 18, 
      title: 'voluptate et itaque vero tempora molestiae', 
      body: 'descrição atualizada'
    }

    this.service.putDados(obj).then(dados => {
      console.log('UPDATE');
      console.log(dados);

    });
  }

  /* apaga um objeto pelo seu id */
  public deleteById(id:number) {

    this.service.deleteDados(id).then(dados => {
      console.log('DELETE');
      console.log(dados);

    })
  }


  /* cria e salva o objeto */
  public save(){
    let newObj = {
      userId  : 10, 
      id      : 101, 
      title   : 'Novo objeto', 
      body    : 'Descrição do novo objeto'
    }

    this.service.postDados(newObj).then(dados => {
      console.log('SALVO');
      console.log(dados);

    })

  }

}
