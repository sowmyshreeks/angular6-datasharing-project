import { Component, OnInit } from '@angular/core';
import { SharingServiceService } from '../sharing-service.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;
  message:string;

  constructor(
    private DataService : DataService,
    private SharingServiceService : SharingServiceService

  ) { }

  ngOnInit() {
    this.DataService.currentMessage.subscribe(message=> this.message = message)
    this.data = this.SharingServiceService.getData();
  }
  newMessage(){
    this.DataService.chnageMessage('hi rithu baby')
  }

}
