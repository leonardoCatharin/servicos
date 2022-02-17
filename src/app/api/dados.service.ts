import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  /* API gratuita para tratamento de JSON  */
  /* https://jsonplaceholder.typicode.com/ */
  /* api de objetos JSON */
  private host = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }

  public getAllDados(){
    return new Promise((ret) => {

      // requisição GET
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public getDadoById(id: number){
    return new Promise((ret) => {

      // requisição GET
      this.http.get(this.host + id).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public postDados(obj: any){
    return new Promise((ret) => {

      /* cabeçalho da requisição */
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      // requisição POST
      this.http.post(this.host, JSON.stringify(obj), { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public putDados(obj: any){
    return new Promise((ret) => {
      
      /* cabeçalho da requisição */
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      // requisição PUT
      this.http.put(this.host + obj.id, JSON.stringify(obj), { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public deleteDados(id: number){
    return new Promise((ret) => {

      // requisição DELETE
      this.http.delete(this.host + id).subscribe(dados => {

        console.log(dados);

      });
    })
  }
}
