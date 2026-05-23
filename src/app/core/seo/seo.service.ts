import {
  Injectable,
  inject,
} from '@angular/core';

import {
  Meta,
  Title,
} from '@angular/platform-browser';

import {
  DOCUMENT,
} from '@angular/common';

/**
 * Servicio global encargado de la gestión de SEO, Meta tags y Open Graph en la aplicación.
 * Centraliza la manipulación del DOM y la inyección de metadatos para optimizar el indexado 
 * en motores de búsqueda y la visualización del contenido al compartirse en redes sociales
 */

@Injectable({
  providedIn: 'root', 
})
export class SeoService {

  private readonly title = inject(Title); 
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);


  private readonly siteName = 'Orbit';

  // Orquestador principal de la configuración SEO de la ruta actual.
  updateSeo(config: SeoConfig): void {

    // Formatea el título de la página. Si viene un título específico, se concatena con el 'siteName'
    const fullTitle = config.title
      ? `${config.title} | ${this.siteName}`
      : this.siteName;

    this.setTitle(fullTitle);

    // Actualización condicional de metadatos tradicionales de SEO
    if (config.description) {
      this.setDescription(config.description);
    }

    if (config.canonicalUrl) {
      this.setCanonical(config.canonicalUrl);
    }

    // Mapeo directo de la configuración general hacia el estándar Open Graph (redes sociales)
    this.setOpenGraph({
      title: fullTitle,
      description: config.description,
      image: config.image,
      url: config.canonicalUrl,
      type: config.type,
    });
  }

  //inserta el titulo
  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  //inserta la description
  setDescription(description: string): void {
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }

   //Actualiza la etiqueta <link rel="canonical"> del documento.
  setCanonical(url: string): void {
    const head = this.document.head;

    // Busca si ya existe un elemento canonical previo en el DOM para reutilizarlo
    let link: HTMLLinkElement | null =
      this.document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url);
  }


   // Configura las etiquetas del protocolo Open Graph  
  setOpenGraph(config: OpenGraphConfig): void {
    
    this.updateOgTag('og:title', config.title);

    if (config.description) {
      this.updateOgTag('og:description', config.description);
    }

    if (config.image) {
      this.updateOgTag('og:image', config.image);
    }

    if (config.url) {
      this.updateOgTag('og:url', config.url);
    }

    // Si no se define un tipo, por defecto se asume 'website'
    this.updateOgTag(
      'og:type',
      config.type ?? 'website',
    );
  }


 // Helper actualización/creación de meta tags
  private updateOgTag(
    property: string,
    content: string,
  ): void {
    this.meta.updateTag({
      property,
      content,
    });
  }
}

// Contrato público que define los datos requeridos por los componentes que consumen este servicio
export interface SeoConfig {
  title: string; //(OBLIGATORIO).
  description?: string;
  canonicalUrl?: string;
  image?: string;
  type?: OpenGraphType;
}

// mapear las propiedades del protocolo Open Graph de forma estricta
interface OpenGraphConfig {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: OpenGraphType;
}

type OpenGraphType =
  | 'website'
  | 'article'
  | 'profile';