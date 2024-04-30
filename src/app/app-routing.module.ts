import {InicioSesionComponent} from "./components/inicio-sesion/inicio-sesion.component";
import {RouterModule, Routes} from "@angular/router";
import {RegistroComponent} from "./components/registro/registro.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {FaqComponent} from "./components/faq/faq.component";

const routes: Routes = [
  { path: 'iniciosesion',component:InicioSesionComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registro',component:RegistroComponent},
  { path: 'faq', component: FaqComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
