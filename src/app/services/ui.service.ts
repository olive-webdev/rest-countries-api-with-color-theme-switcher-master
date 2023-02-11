import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }


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

  private isModeInLS(): boolean {
    return localStorage.getItem('mode') === null ? false : true
  }

  saveModeInLS(mode: string) {
    localStorage.setItem('mode', mode)
  }

  getWindowWidth() {
    console.log(window.innerWidth)
    return window.innerWidth
  }

}
