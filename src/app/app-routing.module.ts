import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent} from './componentes/login/login.component';
import { UsuariosComponent} from './componentes/usuarios/usuarios.component';
import { DetalleUsuarioComponent} from './componentes/detalle-usuario/detalle-usuario.component';
import { RutaErrorComponent} from './componentes/ruta-error/ruta-error.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'usuarios/detalles/:id/:email/:nombre/:apellidos/:avatar',component:DetalleUsuarioComponent},
  {path: '**',component:RutaErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
