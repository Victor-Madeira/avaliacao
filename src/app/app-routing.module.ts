import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 

const routes: Routes = [
  {path:"", component:UsuarioListaComponent},
  {path:"usuario-lista", component:UsuarioListaComponent},
  {path:"usuario-detalhes/:id", component:UsuarioDetalhesComponent},
  {path:"usuario-cadastro", component:UsuarioCadastroComponent},
  {path:"usuario-editar/:id", component:UsuarioEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule, MatToolbarModule, MatTooltipModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
