import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { fromEvent, throttleTime } from 'rxjs';

/*click$.pipe(
  tap(() => updateResult('click')),
  delay(2000),
).subscribe((event) => clearResult());*/


@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.scss']
})


export class UsuarioEditarComponent {
  id : string = "";
  constructor(private route: ActivatedRoute) {}
  firstName : string = "";
  lastName : string = "";
  email: string = "";
  title: string = "";
  gender: string = "";
  phone: string = "";
  picture: string = "";
  dateOfBirth: string = "";
  
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

    const btnAtualizar: HTMLElement = document.getElementById('atualizar')!;
    const clicks = fromEvent(btnAtualizar, 'click');
    const result = clicks.pipe(throttleTime(3000));
    result.subscribe(x => this.onSubmit());
  }

  onSubmit(): void {
    console.log("atualizando")
    const formData = new FormData(document.querySelector('#editarUsuario') as HTMLFormElement);

    var firstName = formData.get('firstName') as string;
    var lastName = formData.get('lastName') as string;
    var email = formData.get('email') as string;
    var dateOfBirth = formData.get('dateOfBirth') as string;
    var phone = formData.get('phone') as string;
    var picture = formData.get('picture') as string;
    
    var body = "firstName=" + firstName + "&lastName=" + lastName + "&email=" + email;
    body = this.gender == "" ? body : body + "&gender=" + this.gender;
    body = this.title == "" ? body : body + "&title=" + this.title;
    body = phone == "" ? body : body + "&phone=" + phone;
    body = picture == "" ? body : body + "&picture=" + picture;
    body = dateOfBirth == "" ? body : body + "&dateOfBirth=" + new Date(dateOfBirth).toISOString().substring(0, 10);
    
    var xhr = new XMLHttpRequest();

    xhr.open("PUT", "https://dummyapi.io/data/v1/user/" + this.id, true);
    xhr.setRequestHeader('app-id', '6452a8978edea06fac91805b');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function(e) {
      if (this.status == 200) {
        alert("Sucesso");
      } else {
        alert("Erro\n" + JSON.stringify(this.response));
      }
    };

    xhr.send(body);
  }

  trocaSexo(value : any) {
    this.gender = value;
  }

  trocaTitulo(value : any) {
    this.title = value;
  }
}


