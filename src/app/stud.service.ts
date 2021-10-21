import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stud } from './modal';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  studData:Array<Stud> = [];
  constructor(private http:HttpClient) { }
  saveStud(stud:Stud){
    // this.userData.push(user)
    return this.http.post(`https://dilipnodejs.herokuapp.com/user-create`,stud)
  }
  getAllStud(){
    return this.http.get<Array<Stud>>(`https://dilipnodejs.herokuapp.com/user-list`)
  }
  getStudByID(id:number){
    return this.http.get<Stud>(`https://dilipnodejs.herokuapp.com/user-edit/${id}`)
  }

  updateStudById(userId:number,userdata:Stud){
    return this.http.put(`https://dilipnodejs.herokuapp.com/user-edit/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://dilipnodejs.herokuapp.com/user-delete/${id}`)
  }
}
