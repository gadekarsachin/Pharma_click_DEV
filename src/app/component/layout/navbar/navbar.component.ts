import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() classList:string;
  @Output() toggleEvent = new EventEmitter<string>();
  // public classList:string = 'customNav';
  // public Products:any = [
  //   'Active Pharmaceutical Ingredients',
  //   'API Equipment',
  //   'Bio Products',
  //   'Cleanroom System',
  //   'Custom Manufacturing',
  //   'Environment Protection',
  //   'Fine Chemicals',
  //   'Fluid Equipment',
  //   'Laboratory',
  //   'TCM Machinery',
  //   'Veterinary',
  //   'Natural Extracts',
  //   'Medical Supplies',
  //   'Parts & Components',
  //   'Packaging Materials',
  //   'Finished Dosage',
  //   'Fine Chemicals',
  //   'Veterinary',
  //   'Water Purification Equipment'
  // ]
 

  constructor(private apiSer:ApiService) { }

  public profileName: string = 'Dipak Sir';
  public navTitle:string = 'Category';
  public val:any;
  ngOnInit(): void {
    // this.apiSer.viewProfile().subscribe((res:any)=>{
    //   // console.log(res);
    //   this.val=res;
    // },(err)=>console.log(err))
  }

  closeNav(){
    this.classList = 'customNav'
    this.toggleEvent.emit(this.classList)
  }
  profile(){
    this.closeNav();
  }

}