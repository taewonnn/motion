import { BaseComponent } from "../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  
  constructor(title: string, url: string) {
    super(`  
      <section class="image">
        <div class="image__holder">
          <img class="image__thumbnail">
        </div>
        <p class="image__title"></p>
      </section>
      `
    );

      // 이미지 동적 추가
      const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
      imageElement.src = url;
      imageElement.alt = title;

      // 타이틀 동적 추가
      const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
      titleElement.textContent = title;
  }
}