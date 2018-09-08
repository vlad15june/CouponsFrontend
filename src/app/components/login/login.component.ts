import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	hide = true;

	loginRes$: any;
	user: any;
	username: string;
	password: string;

	constructor(private data: DataService) { }

	ngOnInit() { }

	login() {
		this.user = { username: this.username, password: this.password };
		this.data.login(this.user).subscribe(
			data => this.loginRes$ = data,
			() => {
				console.log("Error getting response from server");
			},
			() => {
				if (this.loginRes$.login === true)
					console.log("legged in Successfully");
				else
					console.log("login failed");
			});
	}

}
