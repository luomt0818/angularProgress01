import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public list:any[]=[];
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  getdata(){
    let api="http://a.itying.com/api/productlist"
    //alert('get请求');
    this.http.get(api).subscribe((response:any)=>{

      console.log(response);
      this.list=response.result;
    });
  }

  dologin(){

    alert('没有服务器。。。。。');
  }

  getjsonpdata(){

    /*
     http://a.itying.com/api/productlist?callback=XXXXX";
     http://a.itying.com/api/productlist?cb=XXXXX";
    */

    let api="http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe((response)=>{
      console.log(response);
    })
  }

  getaxios(){
    alert('axios未配置。。。。');
  }
}
