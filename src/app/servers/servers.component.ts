import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = false;
  serverName = 'Test server';
  servers = ['TestServer1', 'TestServer2'];

  constructor() {
    setTimeout(()=>{this.allowNewServer =  true;},2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = true;
    this.servers.push(this.serverName);
  }
}
