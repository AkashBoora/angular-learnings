import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInput',{static:true}) severContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.severContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(bluePrintNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: bluePrintNameInput.value,
      bluePrintContent: this.severContentInput.nativeElement.value,
    });
  }
}
