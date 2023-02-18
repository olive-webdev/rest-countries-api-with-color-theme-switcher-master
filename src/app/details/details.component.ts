import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { cca3 } from '../cca3'
import { Country } from '../interfaces/country'
import { CountriesService } from '../services/countries.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  country$!: Observable<Country[]>

  constructor(
    private countries: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.country$ = this.countries.getCountriesByName(params.get('id')!)
    })
  }

  back() {
    this.location.back()
  }

  goToCountry(code: string) {
    this.router.navigate(['/' + cca3[code].eng])
  }

}
