import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { API_CONFIG } from '../../../core/config/api.config';

export interface SwapiPlanetResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiPlanet[];
}

export interface SwapiPlanet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
  residents: string[];
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlanetsApi {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = API_CONFIG.baseUrl;

  getAll(page: number = 1) {
    return this.http.get<SwapiPlanetResponse>(
      `${this.baseUrl}${API_CONFIG.endpoints.planets}/?page=${page}`
    );
  }
}