import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { speedDialFabAnimations } from './speed-dial.fab.animations';
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations: speedDialFabAnimations
})



export class SpeedDialFabComponent {

  constructor(private router: Router) { }


  onClick() {
    console.log("navegación a nueva reforma");
    this.router.navigate(['/login']);
  }


}



