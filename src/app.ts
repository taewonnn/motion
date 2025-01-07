import { IComponent } from './components/page/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteCompoent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';

class App {
  private readonly page: IComponent & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    // image 컴포넌트 추가
    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    // note 컴포넌트 추가
    const note = new NoteCompoent('Note Title', 'Note Body');
    this.page.addChild(note);

    // todo 컴포넌트 추가
    const todo = new TodoComponent('Todo Title', 'Todo');
    this.page.addChild(todo);

    // video 컴포넌트 추가
    const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    this.page.addChild(video)
  }
}

new App(document.querySelector('.document')! as HTMLElement);



