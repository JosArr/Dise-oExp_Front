import {InicioSesionComponent} from "./components/inicio-sesion/inicio-sesion.component";
import {RouterModule, Routes} from "@angular/router";
import {RegistroComponent} from "./components/registro/registro.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: 'iniciosesion',component:InicioSesionComponent},
  { path: 'registro',component:RegistroComponent},
  { path: '', redirectTo: 'iniciosesion', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
