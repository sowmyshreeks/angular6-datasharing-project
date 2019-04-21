import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharingServiceService } from '../sharing-service.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { from } from 'rxjs';
// import { SharingServiceService } from '';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() title : string;
  @Output() outputName = new EventEmitter<string>();
  name : string = "hello angular 7 with sowmya";
  viewChild : string = "yelligo";

  childToParent(){
    this.outputName.emit(this.name);
  }

  data:any =  "example to share data through service";
  message:string;
  constructor(
    private router:Router,
    private DataService: DataService,
    private SharingServiceService : SharingServiceService
  ) { }

  

  ngOnInit() {
    this.DataService.currentMessage.subscribe(message => this.message = message)
      this.SharingServiceService.setData(this.data);
      // this.router.navigate(['my-app/src/app/about/about.component.html']);//redirects url to new component
  }

}
