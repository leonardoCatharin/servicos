import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  /* API gratuita para jogos de carta  */
  /* http://deckofcardsapi.com/ */
  /* api de baralhos */
  public host = 'http://deckofcardsapi.com/api/deck/';
  
  constructor() { }
}
