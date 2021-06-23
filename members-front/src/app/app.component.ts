import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id: 0, name: '', surname:'', phone: '', email: '', address: '', photo: ''};

  members = [
    {id: 1, name: 'Member 1', surname:'Fulano', phone: '(27) 9.97418-5769', email: 'fulano@gmail.com', address: 'Endereço 1', photo: 'http://www.minhaappa.com/photo1'},
    {id: 2, name: 'Member 2', surname:'Beltrano', phone: '(27) 9.97645-5489', email: 'beltrano@gmail.com', address: 'Endereço 2', photo: 'http://www.minhaappa.com/photo2'},
    {id: 3, name: 'Member 3', surname:'Ciclano', phone: '(27) 9.97857-3324', email: 'ciclano@gmail.com', address: 'Endereço 3', photo: 'http://www.minhaappa.com/photo3'},
  ];

  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  };

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log('app.getMembers: aconteceu um erro.');
        console.log('app.getMembers: ', error.message);
      }
    );
  };

  memberClicked = (member: any) => {
    this.router.navigate(['member-detail', member.id]);
  };
}
