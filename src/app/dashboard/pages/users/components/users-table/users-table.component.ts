import { Component, EventEmitter, Input, Output } from '@angular/core';
import { users } from '../../models';




@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'actions'];
  @Input()
  dataSource: users[] = [];

  @Output()
  delateusers= new EventEmitter<users>()
  @Output()
  editusers= new EventEmitter<users>()
}
