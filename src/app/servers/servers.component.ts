import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: '/servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
  // styles: [`
  //   h3 {
  //     color:dodgerblue;
  //   }
  // `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = `No server was created!`;
  serverName = 'Test server';
  username = '';
  serverCreated = false;
  servers = [];
  serversData = [];
  showSecret = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  onAddServer() {
    this.serversData.push("Another Server");
  }

  onRemoveServer (id: number) {
    const position = id;
    this.serversData.splice(position,1);
  }
}
