import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  public categories = new Array();

  private detailPage;

  constructor(public navCtrl: NavController) {
    this.detailPage = DetailPage;
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

  loadDetail(category){
    console.log(category);
    this.navCtrl.push(this.detailPage, {category:category.id})
  }
}
