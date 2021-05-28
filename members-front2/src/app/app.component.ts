import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name: 'Member 01', id: 1, surname: 'Ciclano 01', photo: 'http://www.minhaapp.com/photo01'},
    {name: 'Member 02', id: 2, surname: 'Ciclano 02', photo: 'http://www.minhaapp.com/photo02'},
    {name: 'Member 03', id: 3, surname: 'Ciclano 03', photo: 'http://www.minhaapp.com/photo03'},
  ];

  constructor(private api: ApiService) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('Aconteceu um erro!', error.message);
      }
    );
  };

    memberClicked = (member: { id: any; }) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        //this.selected_member = data;
      },
      error => {
        console.log('Aconteceu um erro 1', error.message);
      }
    );
  };
}
