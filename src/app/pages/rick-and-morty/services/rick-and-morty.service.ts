import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje, Personajes } from '../interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiURLBase: string = 'https://rickandmortyapi.com/api/character';
  private next: string | null = null;
  private prev: string | null = null;

  constructor(private http: HttpClient) { }

  getPersonajes(url: string = this.apiURLBase): Observable<Personajes> {
    return this.http.get<Personajes>(url);
  }

  getpersonaje(termino: string | number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiURLBase}/${termino}`);
  }


  getPersonajesByName(name: string): Observable<Personajes> {
    const url = `${this.apiURLBase}/?name=${name}`;
    return this.http.get<Personajes>(url);
  }

  set nextURL(url: string | null) {
    this.next = url;
  }

  set previousURL(url: string | null) {
    this.prev = url;
  }

  get nextURL(): string | null {
    return this.next;
  }

  get previousURL(): string | null {
    return this.prev;
  }
}
