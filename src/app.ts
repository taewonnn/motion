import { ImageComponent } from './components/page/item/image.js';
import { NoteCompoent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    // image 컴포넌트 추가
    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    image.attachTo(appRoot, 'beforeend');

    // note 컴포넌트 추가
    const note = new NoteCompoent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');

    // todo 컴포넌트 추가
    const todo = new TodoComponent('Todo Title', 'Todo');
    todo.attachTo(appRoot, 'beforeend');

    // video 컴포넌트 추가
    const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    video.attachTo(appRoot, 'beforeend');

  }
}

new App(document.querySelector('.document')! as HTMLElement);



