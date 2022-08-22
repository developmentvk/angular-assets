import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountService]
})
export class AppComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a text' }];
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4, 6];
  onlyOdd = false;
  value = 20;

  accounts: { name: string, status: string }[] = [];

  constructor(private accountService: AccountService) { };


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint ',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }
  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else[
      this.oddNumbers.push(firedNumber)
    ]
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
