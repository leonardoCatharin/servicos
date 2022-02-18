import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  /* API gratuita para jogos de carta  */
  /* http://deckofcardsapi.com/ */
  /* api de baralhos */
  public host = 'http://deckofcardsapi.com/api/deck/';
  
  constructor(private http: HttpClient) { }

  /* embaralha as cartas e recupera um novo deck */
  public shuffle(count: number){
    let pathShuffle = 'new/shuffle/?deck_count=' + count;

    return new Promise((ret) => {

      this.http.get(this.host + pathShuffle).subscribe(deck => {

        ret(deck);

      });
    })
  }

  /* retira uma carta do deck */
  public drawOneCard(deckId: string){
    let pathDrawcard = deckId + '/draw/?count=1';

    return new Promise((ret) => {

      this.http.get(this.host + pathDrawcard).subscribe((deck:any) => {
        if(deck && deck.cards){
          ret(deck.cards);

        } else {
          ret([]);
          
        }
      });
    })
  } 
}
