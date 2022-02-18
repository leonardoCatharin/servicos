import { DeckService } from './../api/deck.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
})
export class DecksPage implements OnInit {
  private countDeck = 1; /* variável utilizada para informar a quantidade de decks que se quer jogar */
  private deck: any;     /* deck corrente */
  
  public cards = [];

  constructor(private ds: DeckService) { }

  ngOnInit() {
  }

  /* inicia jogo */
  initDeck(){
    this.ds.shuffle(1).then(deck => {
      this.cards = []; /* limpa a lista de cartas */
      this.deck = deck;

      alert('O jogo começou!');

    });
  }

  /* retira uma carta e insere na lista de cartas */
  public drawOneCard(){
    if(!this.deck.deck_id){
      alert('Nenhum deck foi inicializado!');

    } else {
      this.ds.drawOneCard(this.deck.deck_id).then(card => {
        // card vem como Array, por isso [0]
        this.cards.push(card[0]);
        
      });
    }
  }
}
