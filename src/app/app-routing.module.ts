import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

{path: '', redirectTo: 'entrar', pathMatch: 'full'}, /* págins inicial vai para o componente entrar*/
{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent},

{path: 'inicio', component: InicioComponent},
{path: 'tema', component: TemaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
