import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<any> {

    const url=environment.APIUrl+'/Accounts/Login';
    return this.http.post(url, user);
  }

  recoverPassword(document): Observable<any> {
    if (document !== 12345) {
      return of({ msj: 'Documento no encontrado', code: 404 });
    }
    if (document === 12345) {
      return of({ msj: '', code: 200 });
    }
  }

  recoverEmail(email): Observable<any> {
    if (email !== 'prueba@test.com') {
      return of({ msj: 'Correo incorrecto', code: 404 });
    }
    if (email === 'prueba@test.com') {
      return of({ msj: '', code: 200 });
    }
  }

  recoverCode(code): Observable<any> {
    if (code !== 54321) {
      return of({ msj: 'Escribe un código valido.', code: 404 });
    }
    if (code === 54321) {
      return of({ msj: '', code: 200 });
    }
  }
}
