import { Component, OnInit, Renderer2 } from '@angular/core'
import { UiService } from '../services/ui.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mode!: string|null

  constructor(
    private ui: UiService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.mode = this.ui.getMode()
    this.render.addClass(document.body, this.mode || "light")
  }

  toggleMode() {
    this.render.removeClass(document.body, this.mode || "light")
    this.mode = this.mode === "dark" ? "light" : "dark"
    this.ui.saveModeInLS(this.mode)
    this.render.addClass(document.body, this.mode)
  }
}
