import {
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';

import {
  ActivatedRoute,
} from '@angular/router';

import {
  CharactersFacade,
} from '../../../state/characters.facade';

import {
  SeoService,
} from '../../../../../core/seo/seo.service';

@Component({
  selector: 'app-character-detail-page',
  standalone: true,
  templateUrl: './character-detail-page.html',
})
export class CharacterDetailPage implements OnInit {

  private readonly route =
    inject(ActivatedRoute);

  private readonly facade =
    inject(CharactersFacade);

  private readonly seo =
    inject(SeoService);

  readonly character =
    this.facade.character;

  readonly loading =
    this.facade.loading;

  readonly error =
    this.facade.error;

  constructor() {

    /**
     * SEO dinámico reactivo
     * usando Signals effect
     *
     */
    effect(() => {

      const character =
        this.character();

      if (!character) {
        return;
      }

      this.seo.updateSeo({

        /**
         * <title>
         */
        title: character.name,

        /**
         * Meta description
         */
        description:
          `${character.name} es un personaje de Star Wars con una altura de ${character.height} cm y un peso de ${character.mass} kg.`,

        /**
         * Canonical URL
         */
        canonicalUrl:
          `https://orbitarium.com/personajes/${character.id}`,

        /**
         * Open Graph image
         * (placeholder por ahora)
         */
        image:
          '/assets/images/og/star-wars-character.webp',

        /**
         * Open Graph type
         */
        type: 'profile',
      });
    });
  }

  ngOnInit(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.facade.loadCharacter(id);
  }

  retry(): void {

    const id =
      this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.facade.retryDetail(id);
  }
}