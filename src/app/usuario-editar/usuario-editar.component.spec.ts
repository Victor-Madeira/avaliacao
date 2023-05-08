import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarComponent } from './usuario-editar.component';

import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';

describe('UsuarioEditarComponent', () => {
  let component: UsuarioEditarComponent;
  let fixture: ComponentFixture<UsuarioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,

        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule
       ],
      declarations: [ UsuarioEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title `Editar usuários`', () => {
    const fixture = TestBed.createComponent(UsuarioEditarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div h2.text-center')?.textContent).toContain('Editar usuários');
  });

  it('should test `trocaSexo()`', () => {
    component.trocaSexo("male");
    fixture.detectChanges();

    expect(component.gender).toEqual("male");
  });

  it('should test `trocaTitulo()`', () => {
    component.trocaTitulo("sr");
    fixture.detectChanges();

    expect(component.title).toEqual("sr");
  });
});
