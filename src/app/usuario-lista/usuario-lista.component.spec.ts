import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaComponent } from './usuario-lista.component';

import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';

describe('UsuarioListaComponent', () => {
  let component: UsuarioListaComponent;
  let fixture: ComponentFixture<UsuarioListaComponent>;

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
      declarations: [ UsuarioListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title `Lista de usuários`', () => {
    const fixture = TestBed.createComponent(UsuarioListaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2.text-center')?.textContent).toContain('Lista de usuários');
  });

  it('should test `ngOnInit()`', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.lastPage).toEqual(0);
    expect(component.lastLimit).toEqual(5);
  });

  it('should test `obterPorPaginacao(event?: PageEvent)`', () => {
    var event = new PageEvent;
    event.pageIndex = 1;
    event.pageSize = 7;

    component.obterPorPaginacao(event);
    fixture.detectChanges();

    expect(component.lastPage).toEqual(1);
    expect(component.lastLimit).toEqual(7);
  });
});
