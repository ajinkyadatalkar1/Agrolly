import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonReorderGroup } from '@ionic/angular';


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.page.html',
  styleUrls: ['./organizer.page.scss'],
})
export class OrganizerPage implements OnInit {

  todoList: string[] = [];
  todo: string;
  reOrder: IonReorderGroup;
  constructor(private storage: Storage) {
    this.storage.get('todo').then((val) => {
        this.storage.set('todo', this.todoList);
        this.todoList = val;
    });
  }

  ionViewWillEnter() {
    this.storage.get('todo').then((val) => {
        this.storage.set('todo', this.todoList);
        this.todoList = val;
    });
  }

  ngOnInit() {
  }

  addToList() {
    this.todoList.push(this.todo);
    this.storage.get('todo').then((val) => {
        if (val === undefined || val === null || val === '') {
          this.storage.set('todo', this.todoList);
          this.todoList = val;
        } else {
          this.storage.remove('todo');
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
