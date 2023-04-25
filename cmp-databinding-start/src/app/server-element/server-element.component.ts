import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) contentChild: ElementRef;

  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("header text content " +this.header.nativeElement.textContent);
    console.log("paragraph text content " +this.contentChild.nativeElement.textContent);
    console.log('ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log("header text content " +this.header.nativeElement.textContent);
    console.log("paragraph text content " +this.contentChild.nativeElement.textContent);
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }
}
