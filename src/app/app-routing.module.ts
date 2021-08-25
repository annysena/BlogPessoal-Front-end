import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo: 'entrar', pathMatch: 'full'}, /* págins inicial vai para o componente entrar*/
{path: 'entrar', component: EntrarComponent},
{path: 'cadastrar', component: CadastrarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
