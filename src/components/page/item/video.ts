import { BaseComponent } from "../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {

  constructor(title: string, url: string) {
    super(`
      <section class="video">
        <div class="video__player"><iframe class="video__iframe"></iframe></div>
        <h3 class="video__title"></h3>
      </section>
    `);

    // iframe 동적 추가
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    // title 동적 추가
    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  // 정규표현식 Regex 이용한 url id 추출 함수
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }

}