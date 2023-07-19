import { Pipe, PipeTransform } from '@angular/core';
import { users } from 'src/app/dashboard/pages/users/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: users, ...args: unknown[]): unknown {
    console.log(value)
    return `${value.name} ${value.surname}`;
  }

}
