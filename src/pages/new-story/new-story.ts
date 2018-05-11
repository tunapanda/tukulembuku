import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-new-story',
  templateUrl: 'new-story.html'
})
export class NewStoryPage {

  constructor(public navCtrl: NavController) {
  }
  
  // @ViewChild('myInput') myInput: ElementRef;

resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
}
}
