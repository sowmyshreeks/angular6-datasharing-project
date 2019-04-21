import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HomeComponent) childReference;
  title = 'my-app sowmya';
  parentName : string;
  age : string;
  
  ngAfterViewInit(){
    this.age = this.childReference.viewChild;
  }
  methodParent($event){
    this.parentName = $event;
  }
}
