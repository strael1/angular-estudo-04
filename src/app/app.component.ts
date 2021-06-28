import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projeto01';

  disabled: boolean = true; 
  usuarios: any[] = [];

  onAddNewUser(datas: {userName: string,userEmail: string, userPhone: string}) {
    this.usuarios.push({
      name: datas.userName,
      email: datas.userEmail,
      phone: datas.userPhone
    })
  }



  // onAddNewUser(userDatas: {userName: string, userEmail: string, userPhone: string}){
  //   this.usuarios.push({
  //     name: userDatas.userName,
  //     email: userDatas.userEmail,
  //     phone: userDatas.userPhone
  //   })
  // }
}
