import { Component, ElementRef, OnInit, Renderer2, AfterContentInit, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { Country } from '../interfaces/country'
import { CountriesService } from '../services/countries.service'
import { UiService } from '../services/ui.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countrySearchField!: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "Antarctic" | ""
  items = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"]
  countriesList!: Country[]
  countriesFiltered!: Country[]
  countriesToDisplay: Country[] = []

  start = 0
  end = 24

  toggle!: boolean

  regions: string = ""
  name: string = ""

  constructor(
    private countries: CountriesService,
    private router: Router,
    private ui: UiService
  ) { }

  ngOnInit(): void {
    this.countries.getCountries().subscribe((data) => {
      this.countriesList = data
      this.scroll()
    })
    this.toggle = false
    this.ui.getWindowWidth()
  }

  scroll() {
    if (this.regions || this.countrySearchField) {
      this.countriesToDisplay.push(...this.countriesFiltered.slice(this.start, this.end))
    }
    else {
      this.countriesToDisplay.push(...this.countriesList.slice(this.start, this.end))
    }
    this.start = this.end
    this.end += 4
  }

  toggleSelect() {
    this.toggle = !this.toggle
  }

  searchCountry(countrySearchField: string) {
    this.countriesToDisplay = []
    this.start = 0
    this.end = 24
    this.countriesFiltered = this.countriesList.filter(
      country => country.name.common.toLowerCase().includes(countrySearchField)
    )
    this.regions = ""
    this.scroll()
    this.toggle = false
    this.name = countrySearchField
  }

  deleteField() {
    this.countrySearchField = ""
    this.searchCountry(this.countrySearchField)
    this.toggle = false
  }

  filterByRegion(region: string) {
    this.countriesToDisplay.length = 0
    this.countrySearchField = ""
    this.start = 0
    this.end = 24
    this.countriesFiltered = this.countriesList.filter(country => country.region === region)
    this.regions = region
    this.scroll()
    this.toggle = false
  }
  resetFilter() {
    this.countriesToDisplay = []
    this.start = 0
    this.end = 20
    this.regions = ""
    this.scroll()
    this.toggleSelect()
  }

  goToCountry(country: Country) {
    this.router.navigate(["/" + country.name.common.toLowerCase()])
  }
}
