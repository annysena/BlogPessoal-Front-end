import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=> {
      this.usuarioLogin = resp

      this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro=> {
      if(erro.status == 500) {
        alert('Usuário ou senha estão incorretos.')
      }
    })
}
}
