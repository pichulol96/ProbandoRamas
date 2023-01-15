import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {UsuariosService } from '../.././servicio/usuarios.service';//servicio
import { Router } from '@angular/router';//rutas
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup = new FormGroup({})
  constructor(private UsuariosService:UsuariosService,private router:Router, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.form=this.fb.group({
      email:['',[
      Validators.required,
      Validators.email
    ]],
    password:['',
      [Validators.required,
      Validators.minLength(6)
    ]]
   })
  }
  onSubmit(){
    let user = this.form.value
    console.log(user);
    this.UsuariosService.Login(user).subscribe((resp:any)=>{
      //console.log(resp);
      //console.log(resp.token);
      if(resp.token)
      {
        sessionStorage.setItem("token",resp.token);
        this.router.navigate(['usuarios']);
      }
    }, err => {
      500
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Usuario Incorrecto',
        text: user.email,
        showConfirmButton: false,
        timer: 2000
      })
    });
  }


}