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
import { DetailPage } from '../pages/detail/detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//streaming media
import { StreamingMedia } from '@ionic-native/streaming-media';

import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { SocialSharing } from '@ionic-native/social-sharing';

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
    ListenPage,
    DetailPage
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
    ListenPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreamingMedia,
    Media,
    File,
    SocialSharing
  ]
})
export class AppModule {}