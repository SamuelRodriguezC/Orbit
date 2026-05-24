import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_CONFIG } from '../../../core/config/api.config';

export interface SwapiPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}

export interface SwapiPerson {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class CharactersApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = API_CONFIG.baseUrl;

  getAll(page: number = 1) {
    return this.http.get<SwapiPeopleResponse>(
      `${this.baseUrl}${API_CONFIG.endpoints.characters}/?page=${page}`
    );
  }

  getById(id: string | number) {
    return this.http.get<SwapiPerson>(
      `${this.baseUrl}${API_CONFIG.endpoints.characterById(id)}`
    );
  }
}