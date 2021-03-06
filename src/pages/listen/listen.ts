import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ListenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listen',
  templateUrl: 'listen.html',
})
export class ListenPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListenPage');
  }

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  constructor(public navCtrl: NavController,
    private media: Media,
    private file: File,
    public platform: Platform, 
    private socialSharing: SocialSharing ) {}

  getAudioList() {
      if(localStorage.getItem("audiolist")) {
        this.audioList = JSON.parse(localStorage.getItem("audiolist"));
        console.log(this.audioList);
      }
  }

  ionViewWillEnter() {
    this.getAudioList();
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }

  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }

  // social sharing
  // regularShare(file){
  //   var fil3 = this.file.getFile('/file:\/\//g', file, {});
  //   var msg = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //   this.socialSharing.share("Having fun reading", "Tukule Mbuku", fil3, null);
  // }
    
  // whatsappShare(file){
  //   const root_directory = "/file:///g";
  //   // var msg = this.file.getFile(root_directory, file.filename, {create : false});
  //   // this.socialSharing.shareViaWhatsApp("Reading is fun.", msg, 'http://www.tunapanda.org/');
  // }

  // twitterShare(file){
  //   // var msg = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //   this.socialSharing.shareViaTwitter("Lets learn!", file.name, null);
  // }

  // facebookShare(file){
  //   var msg = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //   this.socialSharing.shareViaFacebook(msg, null, null);
  // }

  regulshare(file){
    this.socialSharing.share("Reading is fun.", "Tukule Mbuku", file.filename, "http://www.tunapanda.org/");
  }


}
