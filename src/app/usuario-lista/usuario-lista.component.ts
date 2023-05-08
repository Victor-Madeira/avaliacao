import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
//import { Observable, fromEvent, tap, delay } from 'rxjs';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})

export class UsuarioListaComponent {
  colunasTabela: string[] = ['firstName', 'lastName', 'acoes'];
  total: number = 0;
  dataSource : any;
  lastPage : number = 0;
  lastLimit : number = 0;

  buscarLista(page: number | undefined, limit: number | undefined) : void {
    page = page == undefined ? 0 : page;
    limit = limit == undefined ? 5 : limit;
    this.lastPage = page;
    this.lastLimit = limit;

    const response = fetch("https://dummyapi.io/data/v1/user?page=" + page + "&limit=" + limit,{
        method: 'GET',
        headers: {
          'app-id': '6452a8978edea06fac91805b'
      }
    }).then(res => {
      return res.json()
    })
    .then(data => 
      {
        this.total = data.total
        this.dataSource = data.data;
      });
  }

  obterPorPaginacao(event?: PageEvent) {
    this.buscarLista(event?.pageIndex, event?.pageSize);
  }
  
  async excluirPorId(id : string) {
    
    var response = await fetch("https://dummyapi.io/data/v1/user/" + id,{
        method: 'DELETE',
        headers: {
          'app-id': '6452a8978edea06fac91805b'
      }}).then(res => {
        return res
      })

    if (response.status == 200) {
      alert("Sucesso");
    } else {
      alert("Erro");
    }

    this.buscarLista(this.lastPage, this.lastLimit);
  }

  ngOnInit() {
    this.buscarLista(0,5);
  }
}


