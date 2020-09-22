import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonReorderGroup } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.page.html',
  styleUrls: ['./organizer.page.scss'],
})
export class OrganizerPage implements OnInit {

  todoList: string[] = [];
  todo: string;
  reOrder: IonReorderGroup;
  language: any;
  constructor(private storage: Storage, private httpcalls: HttpcallsService) {
    this.todoList = this.httpcalls.todoList;
    this.language = this.httpcalls.languageList;
  }

  ionViewWillEnter() {
    this.todoList = this.httpcalls.todoList;
    this.language = this.httpcalls.languageList;
  }

  ngOnInit() {
  }

  addToList() {
    this.todoList.push(this.todo);
    this.storage.get('todo').then((val) => {
      if (val) {
        this.storage.set('todo', this.todoList);
      } else {
        this.storage.remove('remove');
        this.storage.set('todo', this.todoList);
      }
    });
    this.todo = null;
  }

  deleteItem(id: number) {
    this.todoList.splice(id, 1);
    this.storage.remove('todo');
    this.storage.set('todo', this.todoList);
  }

  doReorder(event: any) {
    this.todoList = event.detail.complete(this.todoList);
    this.storage.remove('todo');
    this.storage.set('todo', this.todoList);
  }
}
