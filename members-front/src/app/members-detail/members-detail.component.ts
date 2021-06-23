import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  selected_member = {id: 0, name: '', surname:'', phone: '', email: '', address: '', photo: ''};
  selected_id = 0;

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService, 
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') as string);
      this.selected_id = id;
      this.loadMember(id);
    });
  };

  loadMember(id: number) {
    this.api.getMember(id).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log('members-detail.loadMember: aconteceu um erro');
        console.log(error.message);
      }
    );
  };

  updateMember() {
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log('members-detail.updateMember: aconteceu um erro');
        console.log(error.message);
      }
    );
  };

  deleteMember() {
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index = -1;
        this.appComponent.members.forEach((e, i) => {
          if(e.id == this.selected_id)
            index = i;
        });
        this.appComponent.members.splice(index, 1);
      },
      error => {
        console.log('members-detail.deleteMember: aconteceu um erro');
        console.log(error.message);
      }
    );
  };

  newMember() {
    this.router.navigate(['new-member']);
  };

}
