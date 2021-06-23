import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ApiService } from '../members-detail/api.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member = {id: 0, name: '', surname:'', phone: '', email: '', address: ''};

  constructor(
    private api: ApiService,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  saveMember() {
    this.api.saveMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
      },
      error => {
        console.log('new-member.saveMember: aconteceu um erro');
        console.log(error.message);
      }
    );
  }

}
