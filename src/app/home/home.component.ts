import { Component, OnInit } from '@angular/core';
import { MessageSnackBarService } from '../_core/snackbar/message-snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageService : MessageSnackBarService) { }

  ngOnInit() {
    this.messageService.show("snackBar OK", null, 500000); 
  }

}
