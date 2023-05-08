import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.scss']
})
export class UsuarioDetalhesComponent {
  id : string = "";
  constructor(private route: ActivatedRoute) {}
  firstName : string = "";
  lastName : string = "";
  email: string = "";
  title: string = "";
  gender: string = "";
  phone: string = "";
  picture: string = "";
  dateOfBirth : string = "";
  
  preencheDados(){
    const response = fetch("https://dummyapi.io/data/v1/user/" + this.id,{
        method: 'GET',
        headers: {
          'app-id': '6452a8978edea06fac91805b'
      }
    }).then(res => {
      return res.json()
    })
    .then(data => 
      {
        console.log(data)        
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.title = data.title;
        this.gender = data.gender;
        this.phone = data.phone;
        this.picture = data.picture;
        this.dateOfBirth = data.dateOfBirth;
      });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.preencheDados();    
  }
  
}

