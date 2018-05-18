import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CategoriesPage } from '../categories/categories';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public categories = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let categoryId = navParams.data.category;
    this.categories.push({name: "Fiction", 
                          id: 1, 
                          desc: "Fiction is a story or setting that is derived from imagination—in other words, not based strictly on history "});
    this.categories.push({name: "Romance", 
                          id: 2,
                          desc: "The romance novel or romantic novel discussed in this article is the mass-market literary genre. Novels of this type of genre fiction place their primary focus on the relationship and romantic love"});
    this.categories.push({name: "Sci-fi", 
                          id: 3,
                          desc: "Science fiction is a genre of speculative fiction, typically dealing with imaginative concepts such as advanced science and technology, spaceflight, time travel, and extraterrestrial life."});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
