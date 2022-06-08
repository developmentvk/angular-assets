import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log("constructor Called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called");
    // console.log('Text Content: '+this.header.nativeElement.textContent);
    // console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
    console.log('Text Content of paragraph: '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
    console.log('Text Content: '+this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
