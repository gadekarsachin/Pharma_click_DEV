import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Socket } from 'socket.io-client';
import { ApiService } from '../../shared/services/api.service';
import { SocketioService } from '../../shared/socketio.service';
import {formatDate } from '@angular/common';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-chat-compo',
  templateUrl: './chat-compo.component.html',
  styleUrls: ['./chat-compo.component.css']
})
export class ChatCompoComponent implements OnInit {

  socket: any;
  message!: string;
  messages: any;

  tokens = JSON.parse(localStorage.getItem('token'));
  // console.log("token", tokens);
  // this.socket.emit('join', tokens.CompanyId);
        // console.log(tokens.CompanyId);

  dataArr: any = [];
  profileName: any;
  profileData: any;
  base64textString: any;
  imagePath: any;
  companyId: any;
  companyData: any;
  today= new Date();
  currentTime = '';

  constructor(private socketService: SocketioService, private location: Location,
    private apiService: ApiService, private sanitizer: DomSanitizer, 
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    let tokens = JSON.parse(localStorage.getItem('token'));
      this.dataArr.push(tokens);
      console.log("currently login user id",this.dataArr[0].CompanyId);
      this.profileData = JSON.parse(localStorage.getItem('token'));
      this.profileName = this.profileData.FirstName +" "+this.profileData.LastName;

      this.apiService.viewProfilePic(this.dataArr[0].CompanyId).subscribe((res:any)=>{
        // this.base64textString = res.FileContents; 
        this.base64textString = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res}`);
      });

    this.socketService.getMessages().subscribe((res: string) => {
      this.messages.push(res);
      this.messages = res;
      console.log("msgs get", res);
    });

    var compId = JSON.parse(localStorage.getItem('this.companyId'));
    // console.log("comp id",compId)

    this.apiService.viewAllCompanyinfo(compId).subscribe((res:any)=>{
      this.companyData=res;

    });
    // companyImg
    
    this.apiService.ViewCompanyImg(compId).subscribe((res:any)=>{
      // console.log(res);
      this.imagePath=res;
    },(err)=>console.log(err))

    let input = document.getElementById('inputs');
    input.addEventListener('keyup', (e) => {
      if(e.keyCode === 13){
        // console.log("key press");
        this.sendMsg();
      }
    })
    
  }

  
  
  // setupSocketConnection(){
  //   this.socket = io(SOCKET_ENDPOINT);
  //   this.socket.on('message-broadcast', (data:string) => {
  //     if(data){
  //       const element = document.createElement('li');
  //       element.innerHTML = this.message;
  //       element.style.background = 'pink';
  //       element.style.padding = '15px 30px';
  //       element.style.margin = '5px';
  //       document.getElementById('message-list')?.appendChild(element)
  //     }
  //   });
  // }

  
 
  sendMsg(){     
    // this.chatService.sendMessage(this.message);
    // this.message = '' ;          
    //   console.log("msg res", this.message);
                            //send msg from user
    // this.socket.emit('message', this.message);

    
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = '#dfdede';
    // element.style.color = 'white';
    element.style.padding = '2px'
    element.style.margin= '0px 0px 5px 0px';
    element.style.textAlign = 'right';
    element.style.display = 'block';
    element.style.fontSize = '16px';
    element.style.width = '100%';
    element.style.display = 'inline-block';
    element.style.border = '2px solid #dfdede';
    element.style.height = 'auto';
    element.style.borderRadius = '10px';
    element.style.overflowWrap = 'break-word';
    document.getElementById('message-list')?.appendChild(element)
    this.message = this.message;

    // current time display
    this.today= new Date();
    var currTime = document.createElement('h5')
    currTime.innerHTML = formatDate(this.today, 'dd-MMM hh:mm a', 'en-US', '+0530');
    currTime.style.float = 'right';
    currTime.style.fontSize = '13.5px';
    currTime.style.margin = '0px 5px 10px 0px';
    document.getElementById('message-list')?.append(currTime);

    // // $('#message-list').html('');
    // $('#message-list').append(
    // "<div class='alert alert-success show'>" +
    // 'element' +
    // '</div>'
  // );
    // console.log("msg in send", this.message)

    this.socketService.sendMessage(this.message);
    this.message = this.message;
    console.log("msg after send", this.message)
    // .subscribe((res: string) => {
    //   this.messages.push(res);
    //   this.messages = res;
    //   console.log("msg res in get", res);
    // });
   

    this.socketService.getMessages().subscribe((res: string) => {
      this.messages.push(res);
      this.messages = res;
      console.log("msgs get", res);
    });

  }

  FPass(e: any){
    // console.log(e.target.value);
    this.message = e.target.value;
    // e.target.value.document.getElementById('inputs').style.height = 'auto';
    // e.target.value.document.getElementById('inputs').style.overflowWrap = 'break-word';
    // e.target.value.document.getElementById('inputs').style.width = '200px';
  }

  goBack(){
    this.location.back();
    // window.history.go(-1); 
    // return false;
  }

  closeChat(){
    // document.getElementById("chat").style.display = 'none'
    this.location.back();
  }
}