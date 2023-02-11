import { Pipe, PipeTransform } from '@angular/core'
import { cca3 } from '../cca3'


@Pipe({
  name: 'cca3'
})
export class Cca3Pipe implements PipeTransform {
  transform(value: string): string {
    return cca3[value].eng
  }
}
