import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyLibraryPage } from '../pages/my-library/my-library';
import { CategoriesPage } from '../pages/categories/categories';
import { GuidePage } from '../pages/guide/guide';
import { NotificationsPage } from '../pages/notifications/notifications';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { MyProgressPage } from '../pages/my-progress/my-progress';
import { MyStoriesPage } from '../pages/my-stories/my-stories';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { NewStoryPage } from '../pages/new-story/new-story';
import { ListenPage } from '../pages/listen/listen';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//streaming media
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MyApp,
    MyLibraryPage,
    CategoriesPage,
    GuidePage,
    NotificationsPage,
    MyFriendsPage,
    MyProgressPage,
    MyStoriesPage,
    SignOutPage,
    NewStoryPage,
    ListenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyLibraryPage,
    CategoriesPage,
    GuidePage,
    NotificationsPage,
    MyFriendsPage,
    MyProgressPage,
    MyStoriesPage,
    SignOutPage,
    NewStoryPage,
    ListenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia
  ]
})
export class AppModule {}