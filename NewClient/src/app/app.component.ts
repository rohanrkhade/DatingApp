import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get('https://localhost:5010/api/users').subscribe({
      next: response => this.users = response, 
      error: error => console.log(error),
      complete: () => console.log('Request has Completed')
      
    })
  }

}
