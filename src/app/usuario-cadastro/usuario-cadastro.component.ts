import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent {
  gender : string = "";
  title : string = "";

  onSubmit(): void {
    const formData = new FormData(document.querySelector('#cadastrarUsuario') as HTMLFormElement);

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

    xhr.open("POST", "https://dummyapi.io/data/v1/user/create", true);
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

    xhr.getAllResponseHeaders();
  }

  trocaSexo(value : any) {
    this.gender = value;
  }

  trocaTitulo(value : any) {
    this.title = value;
  }
}