import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userApiURL = 'https://healthfood-production-ccaa.up.railway.app/api/v1/users';
  isLoggedIn: boolean = false;
  usuarioLogueado: any;
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.userApiURL, user);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any[]>(this.userApiURL).pipe(
      map(users => users.find(user => user.email === email))
    );
  }
  editarUsuario(usuario: any): Observable<any> {
    const url = `${this.userApiURL}/${usuario.id}`;
    return this.http.put<any>(url, usuario);
  }
  getUserPassword(): Observable<string[]> {
    return this.http.get<any[]>(this.userApiURL).pipe(
      map(users => users.map(user => user.password))
    );
  }
  loginUser(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password,
    };


    return this.http.post<any>(`${this.userApiURL}/login`, loginData).pipe(
      map((response) => {
        if (response) {
          this.isLoggedIn = true;
        }
        return response;
      })
    );
  }
  cerrarSesion() {
    this.isLoggedIn = false;
    this.usuarioLogueado = null;
  }
  setUsuarioLogueado(usuario: any) {
    this.usuarioLogueado = usuario;
    this.isLoggedIn = true;
  }
  getUsuarioLogueado() {
    return this.usuarioLogueado;
  }

}
