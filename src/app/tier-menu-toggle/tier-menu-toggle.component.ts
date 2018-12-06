import { Component, OnInit } from '@angular/core';
import {ShareService} from "../share.service";

@Component({
  selector: 'app-tier-menu-toggle',
  templateUrl: './tier-menu-toggle.component.html',
  styleUrls: ['./tier-menu-toggle.component.css']
})
export class TierMenuToggleComponent implements OnInit {

  constructor(private share: ShareService) { }

  isToggle: boolean;
  ngOnInit() {
    this.share.isToggleOn.subscribe(value => {
      this.isToggle = value;
    })
  }

}
