import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriesPage } from '../pages/categories/categories';
import { GuidePage } from '../pages/guide/guide';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { MyStoriesPage } from '../pages/my-stories/my-stories';
import { NewStoryPage } from '../pages/new-story/new-story';
import { MyProgressPage } from '../pages/my-progress/my-progress';
import { ListenPage } from '../pages/listen/listen';


import { MyLibraryPage } from '../pages/my-library/my-library';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = MyLibraryPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMyLibrary(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyLibraryPage);
  }goToCategories(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CategoriesPage);
  }goToGuide(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GuidePage);
  }goToNotifications(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NotificationsPage);
  }goToMyFriends(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyFriendsPage);
  }goToMyStories(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyStoriesPage);
  }goToNewStory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NewStoryPage);
  }goToListen(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListenPage);
  }goToMyProgress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyProgressPage);
  }
}
