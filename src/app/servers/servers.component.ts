import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonStatus = false;

  serverName = '';
  serverName2 = 'Testserver';

  servers = ['Testserver', 'Onion'];

  serverCreationStatus = 'No Server was Created';
  serverCreated = false;

  onCreateServer () {
    this.serverCreationStatus = 'Server ' +this.serverName2 +' Created!';
    this.servers.push(this.serverName2);
    this.serverCreated = true;
  }

  onInputServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
