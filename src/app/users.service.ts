import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return[
      {"id":1,"name":"Furqan","email":"f@gmail.com"},
      {"id":2,"name":"Rudra","email":"r@gmail.com"},
      {"id":3,"name":"Yash","email":"y@gmail.com"},
      {"id":4,"name":"Joyston","email":"j@gmail.com"},
      {"id":5,"name":"Rishikesh","email":"ri@gmail.com"}
    ];
  }
}
