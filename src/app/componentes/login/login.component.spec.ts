import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { UsuariosService } from '../../servicio/usuarios.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Other imports


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  //let service:UsuariosService;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let ser

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
        
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    //service=TestBed.inject(UsuariosService);
  });

  /*beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  /*it('creo servicio',()=>{
     expect(service).toBeTruthy();
     
  })*/

  it('Debe existir el componente', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('forReactivo', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    let email=component.form.controls['email'];
    let password=component.form.controls['password'];
    email.setValue('pichulol96@gmail.com');
    password.setValue('1234567');
    expect(component.form.invalid).toBeFalse();
  });
});
