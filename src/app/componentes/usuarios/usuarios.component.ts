import { Component, OnInit } from '@angular/core';
import {UsuariosService } from '../.././servicio/usuarios.service';//servicio
import { Router } from '@angular/router';//rutas

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios:Array<any>=[];
  constructor(private UsuariosService:UsuariosService,private router:Router) { }

  ngOnInit(): void {
    this.UsuariosService.ObtenerUsuariso().subscribe(resp=>{
      //console.log(resp);
      console.log(resp.data);
      this.usuarios=resp.data;
    });
  }
  DetalleUsuario(id:number,email:string,nombre:string,apellidos:string,avatar:string)
  {
    this.router.navigate(['/usuarios/detalles',id,email,nombre,apellidos,avatar])
  }

}
