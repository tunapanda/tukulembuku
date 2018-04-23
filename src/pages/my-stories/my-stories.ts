import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewStoryPage } from '../new-story/new-story';

@Component({
  selector: 'page-my-stories',
  templateUrl: 'my-stories.html'
})
export class MyStoriesPage {

  constructor(public navCtrl: NavController) {
  }
  goToNewStory(params){
    if (!params) params = {};
    this.navCtrl.push(NewStoryPage);
  }
}
