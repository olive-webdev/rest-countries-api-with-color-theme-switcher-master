import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  column = 1
  row = 1
  info = {
    padding: 4 * 16,
    gap: 4.5 * 16,
    minCardWidth: 260,
    cardInfoHeight: 168.4,
    aspectRatio: (5 / 3)
  }

  private isModeInLS(): boolean {
    return localStorage.getItem('mode') === null ? false : true
  }

  getMode() {
    let mode: string | null
    if (this.isModeInLS()) {
      mode = localStorage.getItem!('mode')
    }
    else {
      mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    }
    return mode
  }

  saveModeInLS(mode: string) {
    localStorage.setItem('mode', mode)
  }

  getNumberOfCards() {
    let containerWidth = (window.innerWidth - 4 * 16) > 1280 ? 1280 : window.innerWidth - 4 * 16
    let containerHeight = window.innerHeight - (80 + 152)
    let cardWidth = (
      containerWidth - (this.column - 2) * this.info.gap) / (this.column - 1)
    let cardHeight = cardWidth / this.info.aspectRatio + this.info.cardInfoHeight

    if (containerWidth - (this.column * this.info.minCardWidth + (this.column - 1) * this.info.gap) > 0) {
      this.column++
      this.getNumberOfCards()
    }
    else this.column--

    if (
      containerHeight - (this.row * cardHeight + (this.row - 1) * this.info.gap) > 0
    ) {
      this.row++
      this.getNumberOfCards()
    }
    else this.row
    
    this.column = this.column === 0 ? 1 : this.column
    return { numberOfCards: this.column * this.row, column: this.column }
  }
}
