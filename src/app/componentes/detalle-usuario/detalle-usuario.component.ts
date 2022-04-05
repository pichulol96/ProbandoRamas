import { Component, OnInit } from '@angular/core';
import {UsuariosService } from '../.././servicio/usuarios.service';//servicio
import { ActivatedRoute, Router } from '@angular/router';//rutas

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  url:string;//url de la aplicacion
  id:string|null;
  email:string|null;
  nombre:string|null;
  apellidos:string|null;
  avatar:string|null;
  usuarios:object;
  constructor(private UsuariosService:UsuariosService,private router:Router,private activateRouter:ActivatedRoute) { 
    this.id='';
    this.email='';
    this.nombre='';
    this.apellidos='';
    this.avatar='';
    this.usuarios={};
    this.url='http://localhost:4200/';
  }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.paramMap.get('id');
    this.email=this.activateRouter.snapshot.paramMap.get('email');
    this.nombre=this.activateRouter.snapshot.paramMap.get('nombre');
    this.apellidos=this.activateRouter.snapshot.paramMap.get('apellidos');
    this.avatar=this.activateRouter.snapshot.paramMap.get('avatar');

  }

}
