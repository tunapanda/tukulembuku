import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-new-story',
  templateUrl: 'new-story.html'
})
export class NewStoryPage {

  public stories = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  save_data(){
    this.stories.push({title: "", 
                      id: 1, 
                      content: ""});
    
  }
  
}
