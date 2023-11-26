import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
     let parentOffset:any;
      let currentSection: string;
      const children = this._el.nativeElement.children;
      const scrollTop = event.target.scrollTop;
      console.log("scrollTop==",scrollTop);
      if(children[0].offsetHeight>= 100)
      {
         parentOffset = event.target.offsetTop+25 ;

      }
      else{
         parentOffset = event.target.offsetTop+25 ;
      }

    //   if(children[3].offsetHeight>= 300)
    //   {
    //      parentOffset = event.target.offsetTop+100 ;
    //   }
    //   else{
    //      parentOffset = event.target.offsetTop+100 ;
    //   }
     
    //   console.log("element===",children[0].offsetHeight);
    //   console.log("element===",children[1].offsetHeight);
    //   console.log("element===",children[2].offsetHeight);
    //   console.log("element===",children[3].offsetHeight);
      for (let i = 0; i < children.length; i++) {
          const element = children[i];
  
          
          if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
              if ((element.offsetTop - parentOffset) <= scrollTop) {
                  currentSection = element.id;
              }
          }
      }
      if (currentSection !== this.currentSection) {
          this.currentSection = currentSection;
          this.sectionChange.emit(this.currentSection);
      }
  }

}
