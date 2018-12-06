import {Component, HostListener, OnInit} from '@angular/core';
import {ShareService} from "../share.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  searchEnabled=false;
  constructor(private share: ShareService) { }

  toggleNavbar() {
    this.share.isToggleOn.next(this.navbarOpen);
    this.navbarOpen = !this.navbarOpen;

  }
  enableSearch() {
    this.searchEnabled = !this.searchEnabled;
  }
  disableSearch(){
    this.searchEnabled=!this.searchEnabled;
  }

  @HostListener('window:resize', [ '$event.target' ])
  onResized(target: Window) {
    if(target.innerWidth > 993){
      this.navbarOpen = false;
      this.share.isToggleOn.next(false);

    }
  }



  ngOnInit() {

  }

}
