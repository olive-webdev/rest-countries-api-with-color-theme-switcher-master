import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Country } from '../interfaces/country'


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(
      catchError(this.handleError<Country[]>('getCountries', []))
    )
  }

  getCountriesByName(name: string) {
    return this.http.get<any>('https://restcountries.com/v3.1/name/' + name + '?fullText=true')
      .pipe(
        catchError(this.handleError<Country[]>('getCountry ' + name, []))
      )
  }
}
