import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	userlist: user[]=[];
	
	submit(frm)
	{
		
		var user: user;
		user=frm.value;
		this.userlist.push(user);
		
	}
  
  ngOnInit() {
  }

}
