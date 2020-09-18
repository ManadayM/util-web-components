import { Component, h, Prop, Element } from '@stencil/core';
import 'intersection-observer';

@Component({
  tag: 'uc-image',
  shadow: false,
})
export class UcImage {

  @Element() el: HTMLElement;

  observer: IntersectionObserver;

  // Props

  /**
   * Render component as 'img' or 'picture'.
   * Default is 'img'.
   */
  @Prop() as: 'img' | 'picture' = 'img';

  /**
   * CSS classes to be added on the root (picture) element.
   */
  @Prop({
    attribute: 'class',
    reflect: false
  })
  dataClass: string;

  /**
   * Text for image's alt attribute.
   */
  @Prop({
    attribute: 'alt',
    reflect: false
  })
  dataAlt: string;

  /**
   * Image height.
   */
  @Prop({
    attribute: 'height',
    reflect: false
  })
  dataHeight: string | number;

  /**
   * Image src.
   */
  @Prop({
    attribute: 'src',
    reflect: false
  })
  dataSrc!: string;

  @Prop({
    attribute: 'srcset',
    reflect: false
  })
  dataSrcset: string;

  @Prop({
    attribute: 'sizes',
    reflect: false
  })
  dataSizes: string;

  @Prop({
    attribute: 'width',
    reflect: false
  })
  dataWidth: string | number;

  // Component lifecycle events
  componentDidLoad() {
    const imagesAndSources = this.el.querySelectorAll('img, source');

    /**
     * Check for native lazy loading support.
     * Refs:
     * - https://caniuse.com/loading-lazy-attr
     * - https://addyosmani.com/blog/lazy-loading/
     */
    if ('loading' in HTMLImageElement.prototype) {
      // Set "src" attribute from "data-src" ...
      Array
        .from(imagesAndSources)
        .forEach(image => this.setSrc(image));
    }
    // Register image to be observed by the intersection observer...
    else {
      this.observer = new IntersectionObserver(this.onIntersection.bind(this));
      imagesAndSources.forEach(image => {
        this.observer.observe(image);
      });
    }
  }

  // Local methods
  async onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
          this.observer.disconnect();
        }

        this.setSrc(entry.target);
      }
    }
  }

  setSrc(element) {
    const dataSrc = element.getAttribute('data-src');
    const dataSrcset = element.getAttribute('data-srcset');

    if (dataSrc) {
      element.setAttribute('src', dataSrc);
      element.removeAttribute('data-src');
    }

    if (dataSrcset) {
      element.setAttribute('srcset', dataSrcset);
      element.removeAttribute('data-srcset');
    }
  }

  render() {
    if (this.as === 'img') {
      return (
        <img
          class={this.dataClass}
          data-src={this.dataSrc}
          alt={this.dataAlt}
          data-srcset={this.dataSrcset}
          sizes={this.dataSizes}
          height={this.dataHeight}
          width={this.dataWidth}
          loading="lazy"
        />
      );
    }
    else {
      return (
        <picture class={this.dataClass}>
          <slot>{/* All <source /> nodes will be injected here... */}</slot>
          <img
            data-src={this.dataSrc}
            alt={this.dataAlt}
            data-srcset={this.dataSrcset}
            sizes={this.dataSizes}
            height={this.dataHeight}
            width={this.dataWidth}
            loading="lazy"
          />
        </picture>
      );
    }
  }
}
