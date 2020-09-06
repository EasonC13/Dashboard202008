import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ConditionalExpr } from '@angular/compiler';
import {Observable, interval} from 'rxjs';


var globalInfo = Object();

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data;
  info = Object()
  update;
  httpHelp;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      (param)=>{
      this.info.cond = param["cond"];
      if(this.info.cond == undefined){
        this.info.cond = "all";
      };
      this.info.decending = param["decending"];
    })
    this.httpHelp = this.httpClient;

  }

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      this.getUpdate();
    })
  }

  dummy = 1;
  ngDoCheck(){
    //console.log("update", this.data.data)
  }

  decending = true;
  inverseDecending(){
    this.decending = !this.decending;
    this.info.decending = !this.info.decending
  }


  getUpdate(){
    console.log("updateing", this.httpHelp)


    this.httpClient.get("http://clwcron.upls.ntnu.edu.tw:8989/api/status")
    .subscribe({
      next: data => {
        this.data = data;
        console.log("DATA",this.data);
        this.modifyContent(this.data);
      }
    })



    console.log(this)
    // globalInfo.this = this;
    // fetch("http://clwcron.upls.ntnu.edu.tw:8989/api/status")
    //   .then(function(response){
    //     console.log("this", globalInfo.this)
    //     return response.json();
    //   })
    //   .then(function(data){
    //     console.log("DATA", data)
    //     globalInfo.this.data = data
    //     console.log("this data", globalInfo.this.data)
    //     globalInfo.this.modifyContent(globalInfo.this.data)
    //   })

  }

  modifyContent(data){
    console.log(data)
  }

}
